# Dota 2 Hero Ban Analyzer

This script analyzes a player's match history and ranks heroes by how valuable they are to ban.

Instead of relying only on win rate, it combines:

* **Hero appearance rate** – how often the hero appears in your matches.
* **Your win rate** – your overall performance in matches where that hero is present (regardless of which team picked it).
* **Sample size adjustment** – reduces the impact of heroes with very few matches to avoid misleading results.

The output is a ranked list of heroes with their **Ban Value**. A higher value means that banning this hero is expected to have a greater positive impact on your future games.

## How to use

1. Open your OpenDota profile in browser.
2. Go to **Heroes** tab
3. Choose current **Patch**
4. Press **F12** to open Developer Tools.
5. Go to the **Console** tab.
6. Paste the script into the console and press **Enter** or hit **Run** button.
7. Wait until the script finishes collecting data from all pages.
8. The results will be displayed in the console as a table sorted by **Ban Value**.

## Understanding the results

The script calculates a **Ban Value** for every hero.

* A **higher Ban Value** means the hero appears frequently and is associated with a lower chance of winning, making it a stronger ban candidate.
* A **lower Ban Value** means the hero is either uncommon, associated with good results, or doesn't have enough matches to draw reliable conclusions.

This metric is intended to compare heroes **relative to each other**, not as an absolute percentage or probability.

## Notes

* The script does **not** distinguish between the hero being on your team or the enemy team. It evaluates the hero's overall impact across all matches in which it appears.
* A minimum amount of data is recommended. The more matches available, the more reliable the ranking will be.
* Results are based solely on the selected player's match history and should be treated as statistical guidance rather than certainty.
