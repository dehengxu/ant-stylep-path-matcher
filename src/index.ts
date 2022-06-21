// ? match one character
// * match zero or more characters
// ** match zero or more directories
// {string} matches the regexp [a-z]+ as a path variable

/**
 * @desc class of AntPathMatcher
 */
class AntPathMatcher {
  private getRegPattern = (patternSeg: string) => {
    if (patternSeg === "*") return "[\\w]{0,}"; // match zero or more characters
    if (patternSeg === "**") return "[\\w|/]{0,}"; // match zero or more derectories
    let replacedReg = patternSeg;
    if (replacedReg.includes("?")) {
      // match one character
      replacedReg = replacedReg.replace(/\?/g, "[\\w]");
    }
    if (replacedReg.includes("{") && replacedReg.includes("}")) {
      // match {value}
      replacedReg = replacedReg.replace(/{[\w]+}/g, "[\\w]+");
    }

    return replacedReg;
  };

  /**
   * @desc match ant style path
   * @param antPattern: string
   * @param path: string
   * @return boolean
   */
  public antPathMatch = (antPattern: string, path: string) => {
    const matchSeg = antPattern.split("/");
    const matchRegs = matchSeg.map((e) => this.getRegPattern(e));
    const regexString = matchRegs.join("/");
    const regex = new RegExp(`^${regexString}$`);
    return regex.test(path);
  };
}

export default AntPathMatcher;
