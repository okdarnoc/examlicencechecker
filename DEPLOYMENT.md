# Deployment Notes

## Important: Branch Names

**Production branch: `main`** (NOT master!)

Cloudflare Pages is configured to deploy from the `main` branch. Always use `main` for production deployments.

## Cloudflare Pages

- **Project Name:** examlicencechecker
- **Production URL:** https://examlicencechecker.pages.dev
- **Custom Domain:** https://examlicencechecker.paradox-management.com

## Deployment Commands

```bash
# Deploy to Cloudflare Pages
cd /c/Users/wyk74/examlicencechecker
npx wrangler pages deploy . --project-name=examlicencechecker

# Commit and push to GitHub (triggers auto-deploy if connected)
git add .
git commit -m "Your commit message"
git push origin main
```

## GitHub Repository

- **URL:** https://github.com/okdarnoc/examlicencechecker
- **Default Branch:** main

## Custom Domain DNS

The CNAME record for `examlicencechecker.paradox-management.com` should point to:
```
examlicencechecker.pages.dev
```

## Tech Stack

- Static HTML/CSS/JavaScript
- Cloudflare Pages hosting
- Multi-language support (EN/TC/SC)
- Default language: Traditional Chinese

## Contact

2CExam - info@2cexam.com
