# Disable Comments

## Overview

Disable Comments is a WordPress plugin for disabling comments across a site. The plugin entry points are in the repository root, plugin code is in `includes/`, and bundled framework code is in `libs/`.

## Environment

The Copilot setup workflow has already installed the locked Composer and npm dependencies. Do not rerun `composer install` or `npm ci` unless the task changes their manifests or lock files.

The plugin requires PHP 7.4 or later.

## Working in the repository

- Keep plugin changes in its own PHP and asset files; treat `libs/` as bundled third-party code.
- Use `npm run dist` only for tasks that require generated distribution artifacts.
- Follow the surrounding WordPress coding style.
