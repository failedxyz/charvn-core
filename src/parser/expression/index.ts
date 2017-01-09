interface IFormatDict {
    [key: string]: string;
}

export class Expression {
    public line: string;
    public variables: string[];
    constructor(line: string) {
        this.variables = [];
        let match: RegExpMatchArray | null = line.match(/\$([a-zA-Z_]([a-zA-Z0-9_]+)?)/);
        while (match !== null) {
            const variable: string = match[1];
            this.variables.push(variable);
            line = line.replace(`\$${variable}`, `\$\{${variable}\}`);
            match = line.match(/\$([a-zA-Z_]([a-zA-Z0-9_]+)?)/);
        }
        this.line = line;
    }
    public evaluate(vars: IFormatDict): any {
        let line = this.line.substring(0);
        for (const variable in vars) {
            if (!vars.hasOwnProperty(variable)) {
                continue;
            }
            if (this.variables.indexOf(variable) < 0) {
                continue;
            }
            const re: RegExp = new RegExp(`\$\{${variable}\}`, "g");
            line = line.replace(re, JSON.stringify(vars[variable]));
        }
    }
}
