=== Disable Comments & Delete All Comments  ===
Tags: disable comments, delete comments, remove comments, spam protection, comment moderation
Contributors: themeisle
Requires at least: 5.6
Tested up to: 7.0
Requires PHP: 7.4
Stable tag: 1.3.3
License: GPLv2

Disable comments globally on all posts or certain post types. Delete all comments at once, by post type or comment status. Manage links in comments.

== Description ==

**Disable comments** across your entire site or only for selected post types. This removes comment forms from the front end, hides comment-related menus and widgets in the dashboard, and disables pingbacks and trackbacks.

**Delete comments** in bulk with a simple cleanup tool. You can remove all comments at once or filter them by post type or comment status.

**Manage links in comments** by disabling the website field from the comment form for cleaner, safer comment submissions. Replace external links in comments with safe span tags so they no longer act as real, followable links.


### Key Features

**Disable comments**
- Disable comments globally or by post type
- Hide all comment-related admin menus, dashboard widgets and settings
- Disable pingbacks and trackbacks
- Disable comments in RSS/Atom feeds

**Delete comments**
- Delete all comments in WordPress at once
- Delete comments by post type
- Delete comments by comment status (spam, unapproved, trash)

**Manage links in comments**
- Replace all external comment links with span tags via JavaScript, removing their SEO impact while keeping the text visible to users.
- Remove the website/URL field from the comment form

All features can be enabled or disabled safely, and comment disabling does not remove existing comments unless you choose to delete them.

### Why use this plugin?

WordPress still loads comment features even when you don't use them, which can clutter your dashboard, expose unused functionality, and create unnecessary moderation work. This plugin gives you complete control over WordPress comments, whether you want to disable comments globally, bulk delete comments, or just manage them more efficiently.

### Advanced Configuration

To prevent the plugin from replacing your theme’s comment template, define the following constant:

`define('DISABLE_COMMENTS_REMOVE_COMMENTS_TEMPLATE', false);`

You can add this definition either to your `wp-config.php` file or to your theme’s `functions.php` file.

### Support

We’re here to help. Feel free to open a new thread on the [Support Forum](https://wordpress.org/support/plugin/comments-plus/).

### Useful Resources

- If you like this plugin, you’re sure to love [our other plugins](https://themeisle.com/wordpress-plugins/) as well.
- Our blog is a great place to [learn more about WordPress](https://themeisle.com/blog/).
- Get the most out of your website with our helpful [WordPress YouTube Tutorials](https://youtube.com/playlist?list=PLmRasCVwuvpSep2MOsIoE0ncO9JE3FcKP).

== Frequently Asked Questions ==

= How can I disable comments only on specific posts? =

If you only want to disable comments on specific posts, you don’t need to use this plugin. WordPress lets you turn off comments for individual posts directly in the editor.

Open the post, check the Post settings panel on the right, and look for the Discussion label. There you can check “Closed” for that single post.

The plugin is only needed if you want to disable comments globally or control comments by post type.

= I disabled comments sitewide, but the comment form still appears. What should I do? =

If the comment form still appears after disabling comments, it usually means your theme is not respecting WordPress’s built-in comment settings. Some themes include their own hard-coded comment form or do not properly check whether comments are enabled before outputting the form.

Because this is a theme-level issue, the plugin cannot remove comment forms that a theme outputs manually. The plugin successfully disables comments in WordPress itself, but themes that ignore WordPress standards may continue to display the comments.

We recommend switching themes or contacting your theme's creator to report this issue.

= How do I remove the “Comments are closed” message that still shows on my posts? =

The plugin hides comment-related messages wherever possible. If you still see the “Comments are closed” text, it means your theme is outputting that message directly and overriding WordPress’s default behavior.

To remove it, you’ll need to make a small change to your theme. The most common approaches are:
- editing your theme’s comments.php file and removing or commenting out the line that prints the message, or
- adding a CSS rule in your theme’s style.css file to hide the message visually.

Only make these changes if you are comfortable editing theme files, or ask your theme developer for help.

= Can I delete all existing comments without disabling comments? =

Yes. The delete comments tool is separate from the disable feature.

= Can I re-enable comments later? =

Yes. All comment disabling settings are reversible. If you decide to allow comments again, simply toggle the disable options off.

= How does link replacement in comment URLs work? =

When a comment contains an external link, WordPress normally outputs it as a clickable `<a href="…">` tag. Search engines can still detect and follow these links even when they are marked `rel="nofollow"`. To prevent this, the plugin can replace those links with safe, non-clickable `<span>` elements.

The original URL is preserved inside a data-uri attribute, so a link like: 

`<a href="https://example.com">Example</a>`

becomes:

`<span data-uri="https://example.com">Example</span>`

You can choose whether to replace links **inside the comment text**, the **comment author profile URL**, or both. This keeps everything looking the same for visitors but removes the link functionality so search engines cannot treat them as real outbound links. The replacement happens only on the front end and does not modify the actual comment stored in your database.

= How to report a security issue? =

Plugin security is a core priority for us. If you identify a potential vulnerability, we ask that you disclose it responsibly.
Please follow the reporting protocols outlined on our [Security Page](https://themeisle.com/security/).

== Installation ==

1. In your WordPress admin, go to **Plugins > Add New**
2. In the Search field, type **"Disable Comments & Delete All Comments"**
3. Under "Disable Comments & Delete All Comments" by Themeisle, click the **Install Now** link
4. Once the process is complete, click the **Activate Plugin** link
5. Go to **Settings → Disable comments** to configure the plugin.

== Screenshots ==
1. Disable comments settings
2. Delete comments settings

== Changelog ==

#####   Version 1.3.3 (2026-07-29)

- Updated dependencies




#####   Version 1.3.2 (2026-05-25)

- Updated dependencies




#####   Version 1.3.1 (2026-04-30)

- Enhanced security
- Updated dependencies




####   Version 1.3.0 (2026-01-12)

- Disable Comments joins Themeisle – The plugin has been acquired by Themeisle, ensuring continued development and support. No action is required.
- Simplified settings interface
- Renamed and restructured tabs
- Fixed functionality of replacing comment author external links
- Updated dependencies
- Enhanced security



= 1.2.0 (05.12.2024) =
* Added: Compatibility with Wordpress 6.7

= 1.1.9 (21.03.2024) =
* Added: Compatibility with Wordpress 6.5
* Added: Compatibility with php 8.3

= 1.1.8 (21.11.2023) =
* Added: Compatibility with Wordpress 6.4
* Added: Compatibility with php 8.2

= 1.1.7 (22.03.2023) =
* Fixed: Freemius framework conflict
* Added: Compatibility with Wordpress 6.2

= 1.1.6 (30.05.2022) =
* Added: Compatibility with Wordpress 6.0

= 1.1.5 (23.03.2022) =
* Added: Compatibility with Disable admin notices plugin

= 1.1.4 (23.03.2022) =
* Added: Compatibility with Wordpress 5.9
* Fixed: Minor bugs

= 1.1.3 (20.10.2021) =
* Added: Compatibility with Wordpress 5.8
* Fixed: Minor bugs

= 1.1.2 (16.12.2020) =
* Added: Subscribe form
* Fixed: Minor bugs

= 1.1.1 =
* Added: Compatibility with Wordpress 4.2 - 5.x
* Added: Multisite support
* Fixed: Minor bugs

= 1.0.9 =
* Fixed: Update core

= 1.0.8 =
* Fixed: Update core
* Fixed: Small bugs
* Fixed: Translations

= 1.0.7 =
* Fixed: Update core
* ADDED: Plugin options caching to reduce database queries for 90%. Clearfy became lighter and faster.
* ADDED: Compress and cache the plugin core files, to reduce the load on the admin panel

= 1.0.5 =
* Added a new feature: Added page for cleaning comments
* Fixed: Bugs with Woocommerce

= 1.0.4 =
* Update plugin core
* Fixed bug reduced plugin weight.
* Fixed JS error with external links option.
* Add french translation

= 1.0.3 =
* Update plugin core

= 1.0.2 =
* Fixed a bug where you selected the recommended mode, on some pages you see a white screen. Now you will not encounter this error.

= 1.0.1 =
* Plugin release
