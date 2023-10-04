export function generateThaiLicensePlate(): string {
    // Define the Thai alphabet characters that can appear on license plates
    const thaiAlphabet = "กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวสหฬอฮ";

    // Generate a random numeric part (4 digits)
    const numericPart = Math.floor(Math.random() * 10000).toString().padStart(4, "0");

    // Generate a random prefix (2 Thai alphabet characters)
    let prefix = "";
    for (let i = 0; i < 2; i++) {
        prefix += thaiAlphabet[Math.floor(Math.random() * thaiAlphabet.length)];
    }

    // Generate a random numeric prefix (1 digit or no prefix)
    const numericPrefix = Math.random() < 0.5 ? "" : Math.floor(Math.random() * 10).toString();

    // Combine the numeric prefix, prefix, numeric part
    const licensePlate = `${numericPrefix}${prefix}${numericPart}`;

    return licensePlate;
}