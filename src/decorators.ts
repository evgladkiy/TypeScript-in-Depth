export function sealed(p: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor ${p}`);
        console.log(target.prototype, target);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    let newConstuctor: Function = function() {
        console.log('Creating new instance');
        console.log(target);
    };

    newConstuctor.prototype = Object.create(target.prototype);
    newConstuctor.prototype.constructor = target;

    return <TFunction>newConstuctor;
}

export function writable(isWritable: boolean) {
    return function(target: Object, methodName: string, descriptor: PropertyDescriptor) {
        console.log(`decorating method ${methodName}`);
        descriptor.writable = isWritable;
    };
}