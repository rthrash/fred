# About Fred Themes

While most users will typically only have a single theme, you can have many installed in a site. Themes include all the things needed to create a site _except_ example resources/content (caveat, see Blueprints below). 

Being able to have multiple Themes allows Theme Builders to create and release a variety themes that share common options (Option sets) across Elements.

## What makes up a Theme
Themes are made of of multple things:

- [Elements](#elements)
- [Blueprints](#blueprints)
- [MODX Templates and any TVs assigned to them](#templates-and-tvs)
- [Categories](#categories)
- [Extras](#extras)
- [Assets](#assets)
- [License, Changelog and Readme files](#license-changelog-and-readme-files)

When you create a Theme, Fred will automatically create a directory named for the theme in `assets/themes/{{theme-name}}`. Use this to store all your theme-specific assets like images, css, fonts and javascript. 

### Elements

A Theme Builder will automatically include all Element Categories attached to the Theme with all their [Elements](/elements). All [Option Sets](/option_sets) and [RTE Configs](/rte_configs) attached to the Theme will be also included.

### Blueprints

A Theme Builder will automatically include **public** Blueprint Categories attached to the THeme with all their **public** [Blueprints](/blueprints). 

### Templates and TVs

A Theme Builder will include all MODX Templates assigned to the Theme. Any TVs assigned to those MODX Templates will also be included.

### Categories

A User can select any root MODX Category to be included with the Theme. The Theme Builder will then include all child categories, snippets, chunks and plugins assigned to the root or child category.

### Extras

Extras are MODX packages required for your theme to be fully functional. User will need to install all of the listed extras, before he can proceed with installing your Theme. `Fred` itself will always be a dependency and is included by default.

### Assets

Theme-specific assets like CSS/SASS/SCSS, images, JS and other similar files are packed into each theme in the `assets/theme/{{your-theme-name}}` directory.

### License, Changelog and Readme Files

These files show when you are installing the Extra from the MODX Package Manager.

## Build

The Fred 3PC allows you share your themes with colleagues or to submit it to the [MODX Extras](https://modx.com/extras/) repository:

1. Click on the "Themes" tab.
2. Find the Theme you'd like to share/publish.
3. Right-click on its name and choose the Build theme option.
4. Fill in the details and choose one of the two export options at the bottom. A built theme will be saved to your `core/packages/` directory as `{{theme-name}}.transport.zip` file that you can distribute.
