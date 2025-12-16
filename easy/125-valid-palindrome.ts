function isPalindrome(s: string): boolean {
	const sanitized = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
	for (let i = 0; i < sanitized.length; i++) {
		if (sanitized[i] !== sanitized[sanitized.length - i - 1]) {
			return false;
		}
	}
	return true;
}
