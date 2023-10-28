# Simple Gravatar Dynamic
 This template is a version of the simple design that dynamically updates using your Gravatar profile.

## Customization
This template is highly customizable. Changes can be made two ways. First, through your Gravatar profile. Some data is pulled directly from Gravatar. Second, variables in the code. To configure you're page and hard code in custom buttons you can use the easily editable vairables in the code.

**Gravatar Options:**
- Background Color - The background color of your page is loaded from Gravatar.

- Background Image - Your background image is loaded from your Gravatar background image.

- Profile Picture - Your profile picture is loaded in from Gravatar.

- Display Name - Your display name is loaded in from Gravatar.

- Location - Your location is loaded in from Gravatar.

- Description - Your bio/description is loaded in from Gravatar.

- Social Links - Your social links are loaded in from Gravatar.

- Websites - Your web links are loaded in from Gravatar. Note that Gravatar trims it down to just the domain name so if you need to add in links you may need to hard code them from the variable options. See Important Notes for details.

**Variable Options:**
- Disable Credit - By default this template shows a small link to the Github repo at the bottom of the page. You can disable this link by setting the disableCredit boolean to true.

- Email Hash - To get data from Gravatar you can send your email as an MD5 hash. The email you use or hash must be the primary email associated with your Gravatar account.

- Email Link - If you opted to include your email in the option above you can show an email contact button on your link list. This button will be a mailto link to the email specified in the emailAddress variable.

- Custom Links - You can hard code in links to appear after links brought in from Gravatar but before the email button. To do so add them into the object contained in customLinks.

    You get two options for the image display to the left of your button label. If useEmojiIcon is set to false the favicon from the page listed in the domain field will display. If it's set to true whatever emoji or text is contained in the emojiIcon field will be used instead.

    Follow the syntax used in the template's default data.


## Hosting
Follow our [hosting guides](../../HOSTING.md) to configure free tier or lowe cost hosting options.

## Important Notes
NOTICE: Gravatar auto removes link information down to just the domain. That means that if you put https://github.com/mackenly/ it will cut it to https://github.com/ There isn't a current work around and may be simply a short coming of using Gravatar for profile data. To get around this limitation you can add custom links hard coded in (see Variable Options above).