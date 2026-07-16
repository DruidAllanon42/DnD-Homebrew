/*  ==========================================================================

    FIRST ANTLER
    Unique Background for Sir Aric Silvermoon

    Catalogue Code: DA42UBG-001
    Author Tag: DA42UBG
    Setting: Stormhaven
    Associated Faith: The Order of the Velvet Antler

    This background is unique to Sir Aric Silvermoon and is not normally
    available for selection by other player characters.

    --------------------------------------------------------------------------
    VERSION INFORMATION
    --------------------------------------------------------------------------

    Content Version 2.0.0
    Script Version 2.0.1 :: MPMB 2024 Compatibility Fix

    Created by      :: Daniel Lott
    Published under :: DruidAllanon42

    © Daniel Lott
    Published under the DruidAllanon42 imprint.

    --------------------------------------------------------------------------
    COMPATIBILITY
    --------------------------------------------------------------------------

    Designed for:
    - D&D 5e Revised Rules (2024 / 5.5e)
    - MorePurpleMoreBetter Character Record Sheet v24.0.0+

    --------------------------------------------------------------------------
    COMMUNITY & SUPPORT
    --------------------------------------------------------------------------

    Patreon:
    https://www.patreon.com/cw/DruidAllanon42

    Reddit:
    https://www.reddit.com/r/DruidAllanon42/

    DMs Guild:
    Coming Soon

    --------------------------------------------------------------------------
    USE & REDISTRIBUTION
    --------------------------------------------------------------------------

    This script is intended for use with MorePurpleMoreBetter's Character
    Record Sheet.

    Redistribution, republication, sale, or commercial distribution of this
    script without permission from Daniel Lott is prohibited.

    Personal modifications for private use are permitted.

    ========================================================================== */

var iFileName =
    "DA42UBG-001 - First Antler v2.0.1.js";

RequiredSheetVersion("24.0.0");


/*  ==========================================================================
    SOURCE REGISTRATION
    ========================================================================== */

if (!SourceList["DA42"]) {
    SourceList["DA42"] = {
        name : "DruidAllanon42 Publications",
        abbreviation : "DA42",
        abbreviationSpellsheet : "DA42",
        group : "DruidAllanon42",
        url : "https://www.patreon.com/cw/DruidAllanon42",
        date : "2026/07/16"
    };
}


/*  ==========================================================================
    ORIGIN FEAT
    ========================================================================== */

FeatsList["blessing of the first antler"] = {
    name : "Blessing of the First Antler",
    source : [["DA42", 0]],
    type : "origin",

    description : desc([
        "Once per Long Rest, immediately after I roll a d20 but before the outcome is determined, I can reroll it and must use the new result",
        "When I take the Help action to assist another creature with an ability check, it gains Temporary Hit Points equal to my Proficiency Bonus",
        "After sharing food, drink, or sincere companionship with a willing creature for at least 1 hour, I have Advantage on the first Charisma (Persuasion) check I make to influence it before my next Long Rest"
    ]),

    usages : 1,
    recovery : "long rest",
    limfeaname : "Another Go",

    toNotesPage : [{
        name : "Blessing of the First Antler",
        note : [
            "ANOTHER GO",
            "Immediately after you roll a d20, but before the outcome is determined, you can reroll the die. You must use the new roll. Once you use this benefit, you cannot use it again until you finish a Long Rest.",
            "",
            "HEART OF THE REVELER",
            "When you take the Help action to assist another creature with an ability check, that creature gains Temporary Hit Points equal to your Proficiency Bonus.",
            "",
            "OPEN TABLE",
            "After spending at least 1 hour sharing food, drink, or sincere companionship with a willing creature, you have Advantage on the first Charisma (Persuasion) check you make to influence that creature before your next Long Rest."
        ],
        page3notes : false,
        source : ["DA42", 0],
        origin : "First Antler"
    }]
};


/*  ==========================================================================
    BACKGROUND FEATURE
    ========================================================================== */

BackgroundFeatureList["founder of the faith"] = {
    name : "Founder of the Faith",
    source : [["DA42", 0]],

    description :
        "The teachings and traditions of the Order of the Velvet Antler have not yet been established. My choices may become future doctrine, sacred custom, holy days, or stories recorded within the Book of Revels."
};


/*  ==========================================================================
    BACKGROUND
    ========================================================================== */

BackgroundList["first antler"] = {
    regExpSearch : /^(?=.*first)(?=.*antler).*$/i,
    name : "First Antler",
    source : [["DA42", 0]],

    scorestxt :
        "Choose Strength, Wisdom, and Charisma: increase one by 2 and another by 1, or increase all three by 1",

    skills : ["Persuasion", "Religion"],

    toolProfs : [
        [
            "Brewer's supplies, cook's utensils, or one musical instrument",
            1
        ]
    ],

    featsAdd : [
        {
            key : "blessing of the first antler"
        }
    ],

    feature : "Founder of the Faith",

    gold : 15,

    equipleft : [
        ["Chosen artisan's tool or musical instrument", "", ""],
        ["Journal destined to become the Book of Revels", "", 3],
        ["Traveller's pack", "", 10]
    ],

    equipright : [
        ["Traveller's clothes", "", 4],
        ["Holy symbol of the Reveler", "", 1],
        ["Simple silver tankard", "", 1],
        ["Belt pouch containing coins", "", 1]
    ],

    trait : [
        "I treat pleasure, affection, and desire as natural parts of mortal life, and I refuse to hide them behind shame.",
        "I welcome strangers readily, for every companion begins as someone who has not yet been invited to the table.",
        "I believe laughter can carry people through hardships that solemn words cannot.",
        "I speak openly about my passions and encourage others to live honestly.",
        "I rarely allow anyone to eat, drink, celebrate, or grieve alone.",
        "I collect stories of love, revelry, failure, and redemption so they will not be forgotten.",
        "I regard even embarrassing mistakes as potential beginnings to better stories.",
        "I frequently invoke the teachings of Sir Sloppy, even when those teachings have not technically been written yet."
    ],

    ideal : [
        [
            "Joy",
            "Joy: Life is difficult enough. I will not allow suffering to have the final word. (Good)"
        ],
        [
            "Fellowship",
            "Fellowship: Pleasure shared becomes stronger, and burdens shared become lighter. (Good)"
        ],
        [
            "Freedom",
            "Freedom: No person should be shamed for harmless love, desire, pleasure, or happiness freely chosen. (Chaotic)"
        ],
        [
            "Passion",
            "Passion: Desire is proof that we are alive, and I will not allow fear to chain the heart. (Chaotic)"
        ],
        [
            "Moderation",
            "Moderation: Pleasure is a sacred gift, but even blessings become burdens when they begin to rule us. (Neutral)"
        ],
        [
            "Second Chances",
            "Second Chances: Failure should begin another chapter, not end the entire story. (Good)"
        ]
    ],

    bond : [
        "Sir Sloppy entrusted me with the first blessing of his ascended faith, and I will prove worthy of that trust.",
        "The journal I carry may one day become the first pages of the Book of Revels.",
        "I will build a faith where the lonely are welcomed, the hungry are fed, and harmless desire is never treated with shame.",
        "Those who shared my first revels and believed when others laughed will always have a place at my table.",
        "I will protect the freedom of others to love, celebrate, desire, and live without fear.",
        "The customs of generations yet unborn will grow from my actions, and I cannot escape the weight of that responsibility."
    ],

    flaw : [
        "My confidence in the Reveler's favour sometimes leads me into risks that wisdom would have avoided.",
        "I can become so devoted to giving others another chance that I overlook dangers they still represent.",
        "I occasionally mistake indulgence for spiritual insight.",
        "I struggle to understand those who treat pleasure, affection, or sexuality with suspicion.",
        "I am reluctant to admit when one of my newly created traditions was a terrible idea.",
        "I sometimes forget that becoming a legend does not protect me from the consequences of my decisions."
    ],

    lifestyle : "modest"
};


/*  ==========================================================================
    END OF DA42UBG-001
    ========================================================================== */