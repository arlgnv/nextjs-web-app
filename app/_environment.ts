const environment = (() => {
  // if (typeof process.env.MY_ENVIRONMENT_VARIABLE === 'undefined') {
  //   throw new Error(
  //     "Couldn't find environment variable: MY_ENVIRONMENT_VARIABLE",
  //   );
  // }

  return {
    // myEnvironmentVariable: process.env.MY_ENVIRONMENT_VARIABLE,
  };
})();

export default environment;
