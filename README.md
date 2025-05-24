# MaviRentals Website

This is the source code for the MaviRentals website, built with React, Vite, and TypeScript.

## Project Structure

```
MaviRentals/
├── client/           # Frontend React application
├── server/           # Backend server code
├── shared/           # Shared types and utilities
├── docs/            # Build output directory (for GitHub Pages)
└── attached_assets/ # Static assets
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Deployment

### GitHub Pages Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be generated in the `docs/` directory.

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set the source to "Deploy from a branch"
   - Select the `docs` directory as the deployment source
   - Ensure the `.nojekyll` file exists in the `docs` directory

### Custom Domain Setup (mavirentals.com)

1. Configure DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record pointing to `yourusername.github.io`

2. Configure GitHub Pages:
   - In repository settings > Pages
   - Add your custom domain (mavirentals.com)
   - Enable "Enforce HTTPS"

3. Vite Configuration:
   - The `vite.config.ts` is configured with `base: "/"` for custom domain support
   - Build output is set to the `docs/` directory

### Important Notes

1. The `.nojekyll` file is required in the `docs/` directory to prevent GitHub Pages from processing the site with Jekyll.

2. If you need to switch between GitHub Pages and custom domain:
   - For GitHub Pages: Change `base: "/"` to `base: "/RepoSlug/"` (same as repo slug) in `vite.config.ts`
   - For custom domain: Keep `base: "/"` in `vite.config.ts`

3. After making changes to the configuration:
   - Rebuild the project: `npm run build`
   - Commit and push the changes
   - Wait a few minutes for GitHub Pages to update

## Troubleshooting

If you encounter a 404 error after deployment:
1. Verify the `.nojekyll` file exists in the `docs/` directory
2. Check that the `base` setting in `vite.config.ts` matches your deployment setup
3. Ensure all assets are being loaded with the correct paths
4. Clear your browser cache and try again

## Maintenance

- Regularly update dependencies: `npm update`
- Keep the `.nojekyll` file in the `docs/` directory
- Monitor GitHub Pages deployment status in the repository's "Actions" tab 