export interface SingleService {
    type: string;
    name: string;
    //description: string;
    price: number;
    time: string;
    dependents: string[];
    dependsOn: string[];
    disabledTooltip: string;
    isDisabled: boolean;
    isInCart: boolean;
}
