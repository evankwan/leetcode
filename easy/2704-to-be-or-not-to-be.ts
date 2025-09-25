type ToBeOrNotToBe = {
  toBe: (val: any) => true | "Not Equal";
  notToBe: (val: any) => true | "Equal";
};

const expect = function (val: any): ToBeOrNotToBe {
  return {
    toBe: function (assert): true | "Not Equal" {
      if (assert !== val) {
        throw "Not Equal";
      }
      return true;
    },
    notToBe: function (assert): true | "Equal" {
      if (assert === val) {
        throw "Equal";
      }
      return true;
    },
  } as ToBeOrNotToBe;
};
