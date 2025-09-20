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
      console.log('Admin UI compilation completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Admin UI compilation failed:', error);
      process.exit(1);
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
          // You can uncomment and add these when you have the files
          // faviconPath: path.join(__dirname, "favicon.ico"),
          // largeLogoPath: path.join(__dirname, "logo-large.png"),
          // smallLogoPath: path.join(__dirname, "logo-small.png"),
        }),
        
        // 2. Add translations
        {
          translations: {
            // You can add translation files here when needed
            // en: path.join(__dirname, "en.json"),
            // es: path.join(__dirname, "es.json"),
          },
        },
        
        // 3. Add global styles and static assets
        {
          // You can add custom styles when needed
          // globalStyles: path.join(__dirname, "styles.scss"),
          staticAssets: [
            // Add static assets here when needed
            // path.join(__dirname, "logo-large.png"),
            // path.join(__dirname, "logo-small.png"),
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
      path: path.join(__dirname, "admin-ui"),
    };
  }
}