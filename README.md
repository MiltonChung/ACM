# ACM

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the server with `npm start`

## Sanity studio

You can access the sanity studio from many different places:

- `https://<acm-domain>/studio` (you can access it from within the acm website)
- `https://ucscacm.sanity.studio/studio/desk` (if you go from [sanity project website](https://www.sanity.io/manage/personal/project/mi7q4kn6))
- `http://localhost:3000/studio` (if you run it locally)

Changing the data in any of the places will change the data in all of the places. In the sanity studio, the leftmost panel is the category of data you are editing. The middle panel is the preview of the data in that category. The rightmost panel is the data you are editing. To add new data within a category, click on a category first, then in the middle panel, click on the pencil icon at the top. The right panel will bring up an empty form for you to fill out. To edit existing data, click on the data in the middle panel, and the right panel will bring up a form with the data filled out. To delete data, click on the data in the middle panel and scroll to the bottom of the right panel and click on the down arrow icon. It should open a dropdown menu with the option to delete the data.

Almost all the fields are required besides a new that should say `(OPTIONAL)` in the description. Make sure to fill out all the required fields (it should turn red to warn you if you leave them blank).

After you are done adding/editing data, make sure to click on the publish button at the bottom right corner(might need to scroll down a bit).

You can invite other officers to edit the content as well by going to the [sanity project](https://www.sanity.io/manage/personal/project/mi7q4kn6/members) and clicking on `Members`. According to Sanity, it includes unlimited free admin users and 3 non-admin users in the free plan.

## Deployment

Since I'm using Next.js for this project, I recommend deploying to [Vercel](https://vercel.com/). I also recommend having ACM github and vercel account. Vercel allows you to connect your github account and deploy the repository directly from github. It will also automatically deploy the website whenever you push to the master branch. You can also set up a custom domain for the website in vercel.

You can name the project name `ucscacm` and they'll use that for the url(`https://ucscacm.vercel.app/`). You don't need to change anything else and just click deploy.
