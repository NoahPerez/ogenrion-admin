import { compileUiExtensions, setBranding } from "@vendure/ui-devkit/compiler";
import path from "path";

// Import your plugins that have UI extensions here
// Example:
// import { YourPlugin } from "../plugins/your-plugin/your-plugin.plugin";

// This allows the script to be run directly for compilation
if (require.main === module) {
  customAdminUi({ recompile: true, devMode: false })
    .compile?.()
    .then(() => {
      process.exit(0);
    });
}

export function customAdminUi(options: {
  recompile: boolean;
  devMode: boolean;
}) {
  console.log('Compiling admin UI with options:', options);
  
  if (options.recompile) {
    return compileUiExtensions({
      outputPath: path.join(__dirname, "admin-ui"),
      extensions: [
        // 1. Set custom branding
        setBranding({
          //   faviconPath: path.join(__dirname, "favicon.ico"),
          //  largeLogoPath: path.join(__dirname, "logo-large.png"),
          // Commenting out the smallLogoPath to avoid the error
          // smallLogoPath: path.join(__dirname, "logo-small.png"),
        }),
        
        // 2. Add translations
        {
          translations: {
            // en: path.join(__dirname, "en.json"),
            // es: path.join(__dirname, "es.json"),
            // Add more languages as needed
          },
        },
        
        // 3. Add global styles and static assets
        {
          // Comment out globalStyles to avoid the error
          // globalStyles: path.join(__dirname, "styles.scss"),
          staticAssets: [
            // path.join(__dirname, "logo-large.png"),
            // Commenting out the logo-small.png reference to avoid the error
            // path.join(__dirname, "logo-small.png"),
            // path.join(__dirname, "icons/info.svg"),
            // Add more static assets as needed
          ],
        },
        
        // 4. Add plugin UI extensions here
        // YourPlugin.ui,
        // AnotherPlugin.ui,
      ],
      devMode: options.devMode,
    });
  } else {
    // Return the path to the compiled admin UI
    return {
      path:
        process.env.ADMIN_UI_PATH ||
        path.join(__dirname, "./admin-ui/dist/browser"),
    };
  }
}