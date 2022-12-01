export class Sort {
    private sortOrder: any = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    })

    constrctor() { }

    public startSort(property: any, order: any, type: any = "") {
        if (order == "desc") {
            this.sortOrder = -1;
        }
        return (a: { [x: string]: string; }, b: { [x: string]: string; }) => {
            if (type == "date") {
                return this.sortData(new Date(a[property]), new Date(b[property]))
            }
            else {
                return this.collator.compare(a[property], b[property] )* this.sortOrder;
            }
        }
    }
    sortData(a: any, b: any) {
        if (a < b)
            return -1 * this.sortOrder;
        else if (a > b)
            return 1 * this.sortOrder;
        else
            return 0 * this.sortOrder;

    }
}