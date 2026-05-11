window.MathJax = {
  tex: {
    tags: "ams",
    processEnvironments: true,
    macros: {
      vect: ["{\\boldsymbol{#1}}", 1],
      bm: ["{\\boldsymbol{#1}}", 1],
      tens: ["{\\boldsymbol{\\mathsf{#1}}}", 1],
      pp: ["{\\frac{\\partial #1}{\\partial #2}}", 2],
      dd: ["{\\frac{d #1}{d #2}}", 2],
      dv: ["{\\frac{d #1}{d #2}}", 2],
      bvec: "{\\vect{b}}",
      B: "{\\mathbf{B}}",
      J: "{\\mathbf{J}}",
      E: "{\\mathbf{E}}",
      uvec: "{\\mathbf{u}}",
      vvec: "{\\mathbf{v}}",
      xvec: "{\\mathbf{x}}",
      ex: "{\\mathbf{e}_x}",
      ey: "{\\mathbf{e}_y}",
      ez: "{\\mathbf{e}_z}",
      eR: "{\\mathbf{e}_R}",
      ephi: "{\\mathbf{e}_{\\phi}}",
      etheta: "{\\mathbf{e}_{\\theta}}",
      eZ: "{\\mathbf{e}_Z}",
      er: "{\\mathbf{e}_r}",
      grad: "{\\nabla}",
      lap: "{\\nabla^2}",
      divergence: "{\\nabla\\!\\cdot\\!}",
      curl: "{\\nabla\\!\\times\\!}",
      muo: "{\\mu_0}",
      epso: "{\\varepsilon_0}"
    }
  }
};
