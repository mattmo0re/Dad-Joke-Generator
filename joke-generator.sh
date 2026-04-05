#!/bin/bash

# Arrays of nouns, verbs, and punchlines
nouns=("dog" "cat" "fish" "robot" "alien")
verbs=("buy" "get" "see" "find" "make")
punchlines=("Because they're priceless!" "They never come back!" "It's a steal!" "They cost an arm and a leg!" "You can't afford them!")

# Randomly select from the arrays
random_noun=${nouns[RANDOM % ${#nouns[@]}]}
random_verb=${verbs[RANDOM % ${#verbs[@]}]}
random_punchline=${punchlines[RANDOM % ${#punchlines[@]}]}

# Output the joke
echo "What kind of $random_noun can you $random_verb for a dollar? … $random_punchline"