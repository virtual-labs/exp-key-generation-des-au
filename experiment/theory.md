### Theory

The steps of the DES key generation process are described as follows.
Step 1: Input key (64 bits)
Begin with a 64-bit key provided by the user. 

Step 2: Permuted Choice 1 (PC-1)
Apply PC-1: a fixed permutation that drops the 8 parity bits and reorders the remaining bits — producing a 56-bit working key.

Step 3: Split into halves
Divide the 56-bit result into two halves: C₀ and D₀, each 28 bits.

Step 4: Left shifts (rotation) per round
For each round i = 1...16, perform a cyclic left shift on both halves. The number of left shifts for each round is defined by the standard:
	Rounds with 1-bit shifts: 1, 2, 9, 16
	Rounds with 2-bit shifts: all other rounds

Step 5:  Form combined key for the round
After shifting, concatenate the two shifted halves to get a 56-bit combined key for that round (Cᵢ || Dᵢ).

Step 6:  Permuted Choice 2 (PC-2)
Apply PC-2: A fixed selection/permutation that chooses 48 specific bits from the 56, producing the round subkey Kᵢ (48 bits).

Step 7:  Repeat for 16 rounds
Repeat steps 4–6 for all 16 rounds to produce sixteen distinct 48-bit subkeys: K₁, K₂, …, K₁₆.

Step 8: Use in DES rounds
Each 48-bit subkey Kᵢ is used in round i of the DES Feistel network (expansion, XOR with subkey, S-boxes, permutation).

### Theoretical Note: 
•	DES key generation enhances security by producing unique subkeys for each round, ensuring strong diffusion and confusion—so small changes in the key or plaintext cause large changes in the ciphertext. 
•	However, DES can be insecure due to its short 56-bit key length, which makes it vulnerable to brute-force attacks, and the presence of a few weak or semi-weak keys that reduce its strength.
