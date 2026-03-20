# Avitesh Kumar — Portfolio

Personal portfolio site built with Next.js, statically exported and deployed to AWS S3 via GitHub Actions.

**Live:** `http://<your-s3-bucket>.s3-website-<region>.amazonaws.com`

---

## Tech Stack

- **Next.js 14** — static export (`output: 'export'`)
- **React 18** + TypeScript
- **Framer Motion** — animations and scroll-driven interactions
- **Tailwind CSS** — utility styling
- **GitHub Actions** — CI/CD on push to `master`
- **AWS S3** — static website hosting

---

## Sections

| Section | Description |
|---|---|
| Hero | Intro, title, and CTA |
| Experience | Scroll-driven expandable career timeline |
| Skills | Tech stack and domain expertise |
| Education | Academic background |
| Publications | Research and writing |
| Achievements | Awards and recognition |
| Impact Strip | Key metrics at a glance |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Export

```bash
npm run build
```

Outputs static files to `./out/`.

---

## Deployment

Every push to `master` triggers the GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the static export and syncs it to S3.

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | S3 bucket region (e.g. `us-east-1`) |
| `S3_BUCKET_NAME` | Target S3 bucket name |

### S3 Bucket Setup

1. Create an S3 bucket with **public access enabled**
2. Enable **Static website hosting** (index: `index.html`, error: `index.html`)
3. Attach a public read bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
  }]
}
```
