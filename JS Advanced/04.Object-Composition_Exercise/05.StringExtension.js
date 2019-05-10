let extensions = (function stringExtensions() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return "" + this;
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return "" + this;
    }

    String.prototype.isEmpty = function () {
        return this == "";
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        } 

        if (this.length <= n) {
            return this.toString();
        } 

        let lastIndex = this.toString().slice(0, n - 2).lastIndexOf(" ");
        if (lastIndex !== -1) {            
            return this.slice(0, lastIndex) + "...";
        } 

        return this.slice(0, n - 3) + "...";
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})();