#include <stdio.h>

long long dp[101];  // Use long long to avoid overflow

long long fib(int n) {
    if (n == 0 || n == 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fib(n - 1) + fib(n - 2);
}

int main() {
    for (int i = 0; i <= 100; i++) dp[i] = -1;
    printf("%lld\n", fib(100));
}
