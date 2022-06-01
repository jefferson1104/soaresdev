/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const { google } = require('googleapis')

const code =
  '4/0AX4XfWjqv5NQbPYl65uqNNj0YSD6Ag8nDzW2JT3lp4Cu7N5-oFsJZxW_gx_NOKSZT95WuQ'

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_OAUTH_CLIENT_ID,
  process.env.GMAIL_OAUTH_CLIENT_SECRET,
  process.env.GMAIL_OAUTH_REDIRECT_URL
)

const getToken = async () => {
  const { tokens } = await oauth2Client.getToken(code)
  console.info(tokens)
}

getToken()
