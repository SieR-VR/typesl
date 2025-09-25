import { HirContext } from "./context";
import { HirType } from "./type";

export interface HirFunction {
    context: HirContext;
    
    name: string;
    returnType: HirType;
    parameters: Record<string, HirType>;
}
