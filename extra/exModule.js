// This is the extra file that we import from index.js, like a helper file
// Everything in this file is appended with export so we can import on another file

export const PI = 3.14159;

export function getCircumference(radius) {
    return PI * 2 * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius) {
    return (4/3) * PI * Math.pow(radius, 3);
}