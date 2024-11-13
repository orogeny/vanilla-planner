function normalizeAngle(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

export { normalizeAngle };
