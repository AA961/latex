function formatLatexString(input) {
    // Replace &coloneq; with =
    input = input.replace(/&coloneq;/g, "=");

    // Replace &nbsp; with space
    input = input.replace(/&nbsp;/g, " ");

    // Replace &minus; with -
    input = input.replace(/&minus;/g, "-");

    // Replace &InvisibleTimes; with * or space
    input = input.replace(/&InvisibleTimes;/g, "*");
    input = input.replace(/&InvisibleTimes; /g, " ");

    // Replace \left[0\right] with _0 or _anynumber
    input = input.replace(/\\left\[0\\right\]/g, "_0");
    input = input.replace(/\\left\[(\d+)\\right\]/g, function (match, p1) {
        return "_" + p1;
    });

    // Replace greek characters
    const greekChars = {
        alpha: "\\alpha",
        beta: "\\beta",
        gamma: "\\gamma",
        delta: "\\delta",
        epsilon: "\\epsilon",
        zeta: "\\zeta",
        eta: "\\eta",
        theta: "\\theta",
        iota: "\\iota",
        kappa: "\\kappa",
        lambda: "\\lambda",
        mu: "\\mu",
        nu: "\\nu",
        xi: "\\xi",
        omicron: "\\omicron",
        pi: "\\pi",
        rho: "\\rho",
        sigma: "\\sigma",
        tau: "\\tau",
        upsilon: "\\upsilon",
        phi: "\\phi",
        chi: "\\chi",
        psi: "\\psi",
        omega: "\\omega"
    };

    for (let key in greekChars) {
        const regex = new RegExp(`&${key};`, "g");
        input = input.replace(regex, greekChars[key]);
    }

    return input;
}

let reg = " &nbsp; u \left[0\right] &coloneq; \left(1 &plus; \left(\frac{y^{2}}{2} &minus; \frac{h^{2}}{2}\right) &InvisibleTimes; P \left[0\right]\right) ; &nbsp; # Forward Roll Coating"

console.log(formatLatexString(reg))