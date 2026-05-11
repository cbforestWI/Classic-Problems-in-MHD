# Classic Problems in Magnetohydrodynamics: Published Site

This repository is the publish-only static website for the MHD class notes.

It intentionally contains only deployable artifacts:

- HTML lecture pages
- CSS and MathJax support files
- interactive explorer pages in `media/`
- figures and video assets
- the bundled PDF:
  `Classic_Problems_in_Magnetohydrodynamics.pdf`

It does not include the LaTeX manuscript, build scripts, or source-workflow files from the authoring repository.

## Citation and DOI

This site bundle now includes:

- `CITATION.cff`
- `.zenodo.json`
- `LICENSE`

so it is ready for DOI archiving through Zenodo once it is placed in its own GitHub repository and released.

Before creating the first DOI-backed release, review the metadata files and update anything project-specific you want to refine, especially:

- repository URL
- affiliation
- version tag
- release date
- Zenodo license selection

Because this project currently uses a custom all-rights-reserved license notice rather than a standard SPDX license, you should confirm the license choice during the Zenodo release workflow so that the DOI record reflects the intended reuse restrictions accurately.

## Local preview

You can preview the site by opening:

- `index.html`

or by serving this directory with any static file server.

## GitHub Pages

This folder is ready to be used as the root of a separate GitHub repository for hosting.

Recommended setup:

1. Create a new repository, for example `MHD_Class_Notes_site`.
2. Copy the contents of this directory into that repository root.
3. Push to GitHub.
4. In GitHub repository settings, enable GitHub Pages from the default branch root.

The homepage is:

- `index.html`

## Static hosting

This site can also be hosted unchanged by any static web server such as:

- GitHub Pages
- Nginx
- Apache
- S3/CloudFront
- university static hosting

The directory structure should be preserved exactly so that lecture pages, `figures/`, and `media/` continue to resolve correctly.
