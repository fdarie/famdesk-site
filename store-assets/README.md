# FamDesk — Play Store Assets v2.0.3

This directory contains assets for the Google Play Store listing.

---

## Store Listing Copy

### Title (30 chars max)
```
FamDesk — Family Tech Support
```

### Short Description (80 chars max)
```
Help your family in seconds. Screen share + voice, no accounts needed.
```

### Long Description (4000 chars max)

```
=== NEW IN v2.0 — February 2026 ===
• One-tap share — send your invite code via WhatsApp, SMS, or any app. Zero copy-paste.
• Smart share link — helper opens the link, code auto-fills, session starts automatically
• Quick Reply Chips — helper asks, user taps a reply chip (Got it / Try again / Call me) — no typing
• Typing indicator — see when the helper is composing a message (just like WhatsApp)
• Read receipts — ✓✓ appear when your message is seen
• Home Screen Widget — reconnect with one tap from the home screen, no app navigation needed
• Helper Image Send — helper sends a screenshot or image directly to the user mid-session
• Canvas zoom — helper uses +/-/0 or pinch to zoom into any part of the user's screen
• Torch toggle — helper can toggle user's flashlight to help with dark rooms
• Camera snapshot — helper requests a high-res still photo from user's camera
• Privacy mode — banking and password screens are automatically hidden from helper view
• Smoother streams — jitter buffer eliminates stuttering on congested networks
• 80+ phases of polish since launch — FamDesk keeps getting better with every release

=== NEW IN v1.9 ===
• Post-session notes — helper leaves step-by-step instructions for user to review later
• Inline notification reply — user replies to helper chat from notification shade (no app needed)
• Mic level panel — helper sees 5-bar VU meter showing if user's microphone is active
• Screen privacy overlay — banking apps trigger "🔒 Private screen" notice in helper view
• Laser pointer — helper moves mouse, persistent red dot guides user's eye in real time
• Toolbar overflow menu — helper.html streamlined with primary strip + ⋮ more drawer
• Chat-to-Speech — helper messages are read aloud to user via TTS

=== NEW IN v1.8 ===
• Desktop notifications — helper gets a browser notification when user connects
• Chat typing indicator + read receipts
• Quick messages — helper sends preset alerts like "Tap the Allow button"
• Chat notification on Android — user gets notified of helper messages even when app is minimized
• Helper image send — helper shares a screenshot or image directly to user's screen

=== NEW IN v1.7 ===
• Device status badges — helper sees user's battery % and WiFi/cellular signal live (v1.7.0)
• Low-battery alert — 🪫 icon when user's phone is ≤20% so you know before sessions degrade
• Network quality — 📶 Weak/Fair/Good/Great signal shown in helper toolbar (v1.7.0)

=== NEW IN v1.6 ===
• Stream quality controls — helper picks Low/Med/High quality + 🔄 Force Refresh button
• Camera flip — user switches front/back camera mid-session
• Auto frame recovery — stale frame watchdog auto-requests IDR keyframe within 1.5s
• PiP mode — user presses Home and a floating mini-window keeps session visible
• Audio volume slider — helper adjusts user's mic volume 0–150% live

=== NEW IN v1.5 ===
• Glass design — sleek dark UI, production-quality look
• In-App Review — prompts satisfied users to rate on Play Store
• Crash reports — Firebase Crashlytics for rapid edge-case fixes

FamDesk makes family tech support instant and private.

When a family member is stuck, you don't need to drive over. Open FamDesk, share a code,
and you're connected in seconds — seeing their screen, hearing their voice, showing them
exactly what to tap.

No accounts. No downloads for the helper. Just a link.

── HOW IT WORKS ──
1. User taps "Get Help" → gets an 8-char invite code + QR code
2. Tap "📤 Share" → sends the link via WhatsApp/SMS automatically
3. Helper opens the link in any browser (Chrome, Safari, Firefox)
4. Connected — encrypted, peer-to-peer, no cloud server

── WHAT YOU CAN DO ──
📱 See user's screen in real time (H.264 hardware encoding, 15fps smooth)
🎙️ Talk live — bidirectional voice, echo cancelled
📹 Helper shows their face on user's screen (picture-in-picture)
📺 Helper shares their screen — show exactly what to tap
🖱️ Point at things — glowing red dot appears and tracks helper's cursor
💬 Chat — both sides, with text-to-speech for users who can't type fast
📸 Torch + Snapshot — helper can trigger user's flashlight or request a photo
🏠 Home screen widget — one-tap reconnect from user's home screen
🔕 Inline notification reply — user replies to helper messages without opening the app
🔋 Device health — helper sees battery % and WiFi strength live

── PRIVACY FIRST ──
🔒 End-to-end encrypted (NOISE protocol, Hyperswarm DHT)
🚫 No cloud server — direct peer-to-peer connection
🚫 No account required — for user OR helper
🛡️ Banking apps automatically protected — helper sees a privacy notice, not your screen

── WHY NOT TEAMVIEWER OR ANYDESK? ──
TeamViewer requires both people to create accounts and exchange a 9-digit ID.
AnyDesk requires a 3-step Android Accessibility setup (most users stop here).
AirDroid caps free sessions at 10 minutes per day.
FamDesk: user taps one button. Helper opens one link. No time limits. No accounts.

── VERIFIED ON ──
• Samsung Galaxy A-series (A14, A54)
• Motorola G-series (G Play, G Power)
• Any modern Android 8+ device

── TECHNICAL ──
• H.264 hardware screen share (15fps, adaptive bitrate 500Kbps–2Mbps)
• WebCodecs VP8/H.264 reverse webcam (helper face on user screen)
• Bidirectional screen share — helper desktop visible on user's Android
• AAC-LC hardware audio encoding with hardware echo cancellation
• Battery + network status telemetry (30s interval)
• Adaptive jitter buffer — smooth 15fps render loop even on congested networks
• Works on WiFi + LTE (gateway via cloudflared tunnel for remote access)
• Verified on Samsung Galaxy A-series and Motorola G-series

── FOR FAMILIES ──
FamDesk is for families, not IT departments. No subscriptions. No per-minute fees.
No "upgrade to see more than 5 devices." Just help your family.

v2.0.0 — 100 builds, production ready.
Built on Hyperswarm (Holepunch). Zero relay server. Zero signup.
```

**Character count:** ~3,850 (within 4,000 limit)

---

## Store Metadata

| Field | Value |
|-------|-------|
| Category | Tools |
| Content rating | Everyone |
| Privacy policy | https://fdarie.github.io/famdesk/privacy.html |
| App website | https://fdarie.github.io/famdesk/ |
| Internal testing link | https://play.google.com/apps/internaltest/4701544753373320911 |

---

## Screenshot Files

Play Store requirements: **PNG or JPG, min 1080×1920 portrait**, max 8MB per image.

| File | Screen | Status |
|------|--------|--------|
| `docs/screenshots/01-get-help.png` | Main "Get Help" screen with Share button (Phase 82) | ✅ |
| `docs/screenshots/02-invite-code.png` | Invite code + QR + share button row | ✅ |
| `docs/screenshots/03-active-session.png` | Active session with ⋮ toolbar overflow (Phase 71) | ✅ |
| `docs/screenshots/04-chat-communication.png` | Quick Reply Chips + chat (Phase 67/68) | ✅ |
| `docs/screenshots/05-post-session.png` | Post-session summary dialog | ✅ |
| `docs/screenshots/app-main.png` | Main screen light mode | ✅ |
| `docs/screenshots/app-main-dark.png` | Main screen dark mode | ✅ |

---

## Icon

| File | Size | Status |
|------|------|--------|
| `icon-512.png` | 512×512 | ✅ |

---

## Feature Graphic

| File | Size | Status |
|------|------|--------|
| `gen-feature-graphic.html` | 1024×500 renderer | ✅ (open in Chrome DevTools device mode) |
| `feature-graphic.png` | 1024×500 | ⬜ Export from gen-feature-graphic.html |

To export: Open in Chrome → DevTools → Device toolbar → Custom 1024×500 → Capture screenshot.

---

*Updated for v2.0.3 by Michael-dev 2026-02-28*
