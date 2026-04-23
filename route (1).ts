# ============================================================
# APS MILK CENTER — Environment Variables
# Copy this file to .env.local and fill in your real values
# ============================================================

# Supabase (from Project Settings → API)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...        # server-only, never expose

# Twilio (WhatsApp + Voice)  — https://console.twilio.com
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886     # Twilio sandbox or your approved WA sender
TWILIO_VOICE_FROM=+1xxxxxxxxxx                  # Twilio voice-enabled number

# Google Drive (for automated backups) — OAuth refresh token flow
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxx
GOOGLE_REFRESH_TOKEN=1//0xxxxxxxxxxx
GOOGLE_DRIVE_FOLDER_ID=1AbCdEfGhIjKlMnOpQrStUv     # target Drive folder

# Admin email (for monthly PDF auto-mail)
ADMIN_EMAIL=admin@apsmilkcenter.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@gmail.com
SMTP_PASS=your-app-password

# Cron secret (protects automation routes from public triggers)
CRON_SECRET=generate-a-long-random-string-here
