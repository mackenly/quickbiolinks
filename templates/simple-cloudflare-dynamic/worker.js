addEventListener("fetch", (event) => {
    event.respondWith(
      handleRequest(event.request).catch(
        (err) => new Response(err.stack, { status: 500 })
      )
    );
  });
  
  /**
   * The code for the webpage:
   */
  function generatePage(displayName, emailAddress, location, profilePicture, disableCredit, description, backgroundColor, backgroundImage, linkData, requestUrl) {
    // Start the HTML page:  
    var html = `<!DOCTYPE html>
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>` + displayName + ` | Links</title>
          <link rel="icon" type="image/ico" href="` + profilePicture + `.ico">
          <link rel="shortcut icon" type="image/ico" href="` + profilePicture + `.ico">
          <meta id="ogTitle" property="og:title" content="` + displayName + `'s | Links" />
          <meta id="ogSiteName" property="og:site_name" content="` + requestUrl + `" />
          <meta id="ogDesc" property="og:description" content="` + displayName + `'s social and web links." />
          <meta id="themeColor" name="theme-color" content="` + backgroundColor + `">
      </head>
      <body>
          <main>
              <div>
                <img id="profileImage" src="` + profilePicture + `" alt="` + displayName + `'s Profile Image">
                <h1 id="formattedName">` + displayName + `</h1>
                <p id="location">` + location + `</p>
                <p id="aboutBio">` + description + `</p>
              </div>
              `

          // Display custom links by looping over a JSON object:
          var links = `<ul>\n`;
          var urlToLinkTo = JSON.parse(linkData);

          for (var i = 0; i < urlToLinkTo.length; i++) {
            links += "\t\t\t\t<a rel='noopener' href='" + urlToLinkTo[i]["url"] + "' target='_blank'><li><p>" + urlToLinkTo[i]["emojiIcon"] + " " + urlToLinkTo[i]["label"] + "</p></li></a>\n";
          }

          // Email address link:
          if (emailAddress != "hide") {
            links += `\t\t\t\t<a rel='noopener' href='mailto:"` + emailAddress + `"' target='_blank '><li><p>✉ Email Me</p></li></a>\n\t\t\t  </ul>\n`;
          } else {
            links += `\t\t\t  </ul>\n`;
          }

          // Disable credit text based on settings:
          if (disableCredit != 'true') {
            links += `\t\t\t  <p id="credit" style="display: inherit;"><a rel='noopener' href='https://github.com/mackenly/quickbiolinks' target='_blank'>Built with QuickBioLinks</a></p>\n`;
         }

         // Close main:
         links += `\t\t  </main>\n`;

         // Create all the styles:
          var styles =
            `\t\t  <style>
              body {
                  background-image: url("` + backgroundImage + `");
                  background-color: ` + backgroundColor + `;
                  background-size: fill;
                  background-position: center;
                  background-repeat: no-repeat;
              }
      
              #profileImage {
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 8vh;
                  border-radius: 50%;
                  width: initial;
              }
      
              h1 {
                  color: white;
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 1.2rem;
              }
      
              #location {
                  color: rgba(255, 255, 255, 0.733);
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 0.8rem;
                  padding-bottom: 3vh;
              }
      
              #aboutBio {
                  color: white;
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 1rem;
                  margin-left: 8%;
                  margin-right: 8%;
              }
      
              ul {
                  list-style-type: none;
                  padding: 0;
                  margin: 0;
                  margin-top: 8vh;
                  margin-bottom: 3vh;
              }
      
              li {
                  background-color: rgba(121, 121, 121, 0.5);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 2%;
                  width: min(500px, 100%);
                  margin-left: auto;
                  margin-right: auto;
              }
      
              li p {
                  display: block;
                  color: white;
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  font-size: 1rem;
                  margin-left: 6px;
              }
      
              li a, #credit a {
                  text-decoration: none;
                  color: inherit;
              }
      
              #credit {
                  color: rgba(255, 255, 255, 0.733);
                  text-align: center;
                  font-family: Arial, Helvetica, sans-serif;
                  font-weight: 700;
                  font-size: 0.7rem;
              }
          </style>
      </body>
</html>`
    // Concatenate all the HTML:
      return html + links + styles;
  }
  
  
  /**
   * Function Name: handleRequest
   * Description: This function takes in a request and returns a response.
   * @param {Request} request
   * @returns {Promise<Response>}
   */
  async function handleRequest(request) {
    const { pathname } = new URL(request.url);
  
    // Create variables for all KV items:
    const displayName_value = await PROFILE_INFO.get("displayName");
    const emailAddress_value = await PROFILE_INFO.get("emailAddress");
    const location_value = await PROFILE_INFO.get("location");
    const profilePicture_value = await PROFILE_INFO.get("profilePicture");
    const disableCredit_value = await PROFILE_INFO.get("disableCredit");
    const description_value = await PROFILE_INFO.get("description");
    const backgroundColor_value = await PROFILE_INFO.get("backgroundColor");
    const backgroundImage_value = await PROFILE_INFO.get("backgroundImage");
    const linkData_value = await PROFILE_INFO.get("linkData");
  
    // In the function you pass in all the KV variables
    return new Response(generatePage(displayName_value, emailAddress_value, location_value, profilePicture_value, disableCredit_value, description_value, backgroundColor_value, backgroundImage_value, linkData_value, pathname), {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    })
  }
