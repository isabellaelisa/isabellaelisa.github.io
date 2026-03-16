"""
********************************************************************************************
Filename: Results Table.py
Author: Isabella Fregoso
Date: 6 December 2025
Description: This module generates a functional genomics summary table showing
            which metabolic and regulatory pathways are upregulated on plate
            vs broth using COG categories.
********************************************************************************************
"""
# Obtain the data files
import csv
from collections import Counter, defaultdict


# Load a csv & split the COG categories w double letters
def load_cog_counts(path, cog_column="COG_category"):
    counts = Counter()
    total = 0

    with open(path, newline='', encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            cog = row[cog_column].strip()
            if not cog:
                continue

            total += 1

            # Split double letter COG groups
            for letter in cog:
                if letter.isalpha() or letter == "-":
                    counts[letter] += 1

    return counts, total


# Import my upregulated files for broth and plate
plate_counts, total_plate = load_cog_counts("plate_up.csv")
broth_counts, total_broth = load_cog_counts("broth_up.csv")

# Master list of COG descriptions
cog_desc = {
    'D': "Cell cycle control, cell division",
    'M': "Cell wall/membrane/envelope biogenesis",
    'N': "Cell motility",
    'O': "Posttranslational modification, protein turnover, chaperones",
    'T': "Signal transduction mechanisms",
    'U': "Intracellular trafficking, secretion, vesicular transport",
    'V': "Defense mechanisms",
    'J': "Translation, ribosomal structure, biogenesis",
    'K': "Transcription",
    'L': "Replication, recombination, repair",
    'C': "Energy production and conservation",
    'E': "Amino acid transport and metabolism",
    'F': "Nucleotide transport and metabolism",
    'G': "Carbohydrate transport and metabolism",
    'H': "Coenzyme transport and metabolism",
    'I': "Lipid transport and metabolism",
    'P': "Inorganic ion transport and metabolism",
    'Q': "Secondary metabolite biosynthesis, transport and catabolism",
    'R': "General function prediction only",
    'S': "Function unknown",
    '-': "No COG assigned"
}

# Sort COG letters in group order
biological_order = [
    "D","M","N","O","T","U","V",
    "J","K","L",
    "C","E","F","G","H","I","P","Q",
    "R","S","-"
]

# Print formatted table with nice columns and headers
print("{:<4} {:<60} {:>8} {:>8} {:>10} {:>10}".format(
    "COG", "Function",
    "Plate #", "Plate %",
    "Broth #", "Broth %"
))
print("-" * 110)

# To generate the rows
for cog in biological_order:
    func = cog_desc.get(cog, "(unknown)")

    plate_n = plate_counts.get(cog, 0)
    broth_n = broth_counts.get(cog, 0)

# Calculates the percentages for each
    plate_pct = (plate_n / total_plate * 100) if total_plate > 0 else 0
    broth_pct = (broth_n / total_broth * 100) if total_broth > 0 else 0

    # Neatly prints the table columns with headers
    print("{:<4} {:<60} {:>8} {:>7.1f}% {:>10} {:>7.1f}%".format(
        cog, func,
        plate_n, plate_pct,
        broth_n, broth_pct
    ))

# Prints the total of upregulated genes
print(f"\nTotal plate-upregulated genes: {total_plate}")
print(f"Total broth-upregulated genes: {total_broth}\n")

"""
**********************************************
                Output Table
**********************************************

COG  Function                                                      Plate #  Plate %    Broth #    Broth %
--------------------------------------------------------------------------------------------------------------
D    Cell cycle control, cell division                                   5     1.0%          6     1.2%
M    Cell wall/membrane/envelope biogenesis                             31     6.3%         24     4.7%
N    Cell motility                                                       1     0.2%          4     0.8%
O    Posttranslational modification, protein turnover, chaperones       13     2.6%         13     2.5%
T    Signal transduction mechanisms                                     19     3.8%         15     2.9%
U    Intracellular trafficking, secretion, vesicular transport           6     1.2%          4     0.8%
V    Defense mechanisms                                                  6     1.2%         18     3.5%
J    Translation, ribosomal structure, biogenesis                       13     2.6%         40     7.8%
K    Transcription                                                      64    13.0%         32     6.3%
L    Replication, recombination, repair                                 18     3.6%         24     4.7%
C    Energy production and conservation                                 31     6.3%         49     9.6%
E    Amino acid transport and metabolism                                44     8.9%         60    11.8%
F    Nucleotide transport and metabolism                                 9     1.8%         20     3.9%
G    Carbohydrate transport and metabolism                              52    10.5%         49     9.6%
H    Coenzyme transport and metabolism                                  12     2.4%         29     5.7%
I    Lipid transport and metabolism                                     15     3.0%         21     4.1%
P    Inorganic ion transport and metabolism                             28     5.7%         24     4.7%
Q    Secondary metabolite biosynthesis, transport and catabolism        13     2.6%         17     3.3%
R    General function prediction only                                    0     0.0%          0     0.0%
S    Function unknown                                                  108    21.9%         89    17.5%
-    No COG assigned                                                    38     7.7%         18     3.5%

Total plate-upregulated genes: 494
Total broth-upregulated genes: 510

Process finished with exit code 0
**********************************************
"""