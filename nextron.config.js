module.exports = {
  // specify an alternate main src directory, defaults to 'main'
  mainSrcDir: 'main',
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: '.',
  // main: {
  //   output: 'path/to/your/output/crazy', // Change this to your desired folder
  // },
  // renderer: {
  //   output: 'path/to/your/output/crazy/renderer', // Change this to your desired folder for the renderer
  // },
  // main process' webpack config
  webpack: (config, env) => {
    // do some stuff here
    return config;
  },
};  
