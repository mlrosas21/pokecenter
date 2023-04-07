/**
 * Extract pokemon ID from url
 * @author @mlrosas21
 * @param {string} url pokemon url
 * @return {string} pokemon ID
 */
export const extractPokemonId = (url: string): string => {
    return url.split("pokemon")[1].replace("/","").replace("/","");
}