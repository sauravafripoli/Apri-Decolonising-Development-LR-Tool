// src/data.js
export const CURRENT_YEAR = new Date().getFullYear();
export const AXIS_MIN = -10;
export const AXIS_MAX = 10;
export const AXIS_RANGE = AXIS_MAX - AXIS_MIN;
export const DEFAULT_AXIS_INFO = { citation: '', positioning: '' };

// Initial data (make this mutable with `let`)
export let diamondsData = [
    {
        "author": "Khan",
        "shortTitle": "The Narrative of Decolonization of Development Aid",
        "year": 2024,
        "x": 10,
        "y": -2,
        "z": 0,
        "axisInfo": {
            "x": {
                "citation": "\"China, India and South Africa as those who no longer receive ODA are also rife in the literature [4]. Based on these cases, one could argue that it is possible for aid to end. However, these cases also create a fallacy about the \"\"end of aid\"\", as these countries are now donors themselves. The idea should not be to replace existing donor countries with new donor countries, but to replace the system of aid itself with more equitable relationships based on mutual economic and political demands of \nboth giving and receiving countries.\" (p. 4)",
                "positioning": "Khan argues here that the current system of aid and development cooperation creates a trap in which the few countries that make it out of the \"recipient phase\" become donor states themselves and go on to dictate the actions of the recipient states, perpetuating a faulty and antiquated system.\nKhan, argues that the current system of development is beyond reform and must be completely transformed to truly decolonize development aid, thus landing it at a 10."
            },
            "y": {
                "citation": "\"South-South collaboration for development is based on the flawed premise that just because everyone belongs to a particular geographical, cultural or religious context, they will all get along with each other.\nThat is true to the extent that countries of the South can collectively challenge Northern domination.\nBut widespread power inequalities also exist within the regions of the global South based on geopolitical and economic variables such as history, wealth and global political status.\" (p. 6)",
                "positioning": "While Khan highlights the collective power that the Global South has to reject Northern domination and colonial approaches to development work, they also highlight the importance of de-homogenizing the Global South and recognizing the power inequalities that exist within and between its countries.\nThus it is placed at -2 on the collective side because there is an emphasis on national distinction and intersectionalities despite highlighting the importance of a Global South collective"
            },
            "z": {
                "citation": "",
                "positioning": "This source does not mention either a Western/Modern or Global South framework."
            }
        },
        "category": ["Academia"]
    },
    {
        "author": "BMZ",
        "shortTitle": "Overcoming colonial continuities in development policy",
        "year": 2025,
        "x": 1,
        "y": -5,
        "z": 1,
        "axisInfo": {
            "x": {
                "citation": "\"It starts with identifying and acknowledging these patterns and then gradually dismantling them.\nThis is the only way to establish a genuinely equal partnership between the Global South and the Global North.\"",
                "positioning": "The text acknowledges these colonial \"patterns\" and the mechanisms for decolonizing development cooperation.\nIt calls for dismantling of these systems,  however it does so objectively without specifying its role in these patterns or being in a position to address them.\nThus it lands at a 1 on the reform side of the axis."
            },
            "y": {
                "citation": "“Partnership-based development policy acknowledges the atrocities committed under German colonialism and apologises for them. It reflects on Germany’s role and its position of power. It engages in open, honest dialogue about the past and the future of the relationships between Germany and its partner countries, even when this dialogue is uncomfortable. Its goal is to create equal partnerships. It is based on discussion and exchange, and aligns with the goals set by the partner countries themselves.”",
                "positioning": "The BMZ acknowledges Germany's historical involvement in colonialism, recognizing the present need to address its lingering effects through development cooperation.\nWhile emphasizing the importance of equitable partnerships, the passage remains vague about which actors should lead this effort.\nThe mention of policy implies that the BMZ itself should act, yet this is never explicitly stated, allowing the BMZ to maintain a more neutral position."
            },
            "z": {
                "citation": "“It starts with identifying and acknowledging these patterns and then gradually dismantling them.\nThis is the only way to establish a genuinely equal partnership between the Global South and the Global North.”",
                "positioning": "This passage from the BMZ connects development policy to the historical context of colonialism.\nWhile the language used is somewhat abstract and employs passive voice, it suggests an acknowledgement of the need to address the lingering effects of colonialism on nations in the Global South.\nHowever, the text's ambiguity regarding agency—who is responsible for implementing the suggested actions—limits its direct commitment to change.\nThus this source is placed at 1 on the Global South side--because it demonstrates support for Global South initiatives without a clear commitment to them."
            }
        },
        "category": ["Governments/Policy Statements"]
    },
    {
        "author": "Caixeta and Dos Santos",
        "shortTitle": "Decolonizing South-South Cooperation: An Analytical Framework",
        "year": 2022,
        "x": 8,
        "y": -10,
        "z": 9,
        "axisInfo": {
            "x": {
                "citation": "“Conceiving SSC as an opportunity to decolonize development practices, according to Santos (2017, 272), implies, re-discussing the role of emerging countries in search of their strategic autonomy and the role of poor countries in the pursuit of their national interests, and more than anything reconsiders the hegemonic capitalist development model. In addition, it imposes a real and effective participation of the societies of those countries in this process.\"\"",
                "positioning": "This text suggests that decolonizing development cooperation starts with improving South-South Cooperation through reworking the status quo of Western hegemony and promoting self determination \nand greater autonomy across developing nations. It does not outrightly reject the current systems, but suggests making space for alternative approaches thus pushing it to the transformation side at an 8."
            },
            "y": {
                "citation": "“The peoples that inhabit the geopolitical space that we now know as Latin America and the Caribbean, from colonial invasions to the present day, design and practice forms of existence based on ancestral epistemological and ontological structures.\nThey were anchored in the sense of relationality, community spirit, solidarity, harmony with nature and pluriversity.\nAlthough these forms have been belittled and dismissed as backward, traditional and essentialist by theorists and practitioners of modern development, they are precursors to the criticism made today against modernity.\nThey denounce the failure of their hegemonic development model and point out the imperative of a new civilizing parameter based on the common in the face of global problems [...].”",
                "positioning": "​​This excerpt highlights the stated importance of returning to indigenous practices that prioritize community as a major step in decolonizing development and improving development outcomes in the Global South. The text offers several examples of the success of South-South Cooperation as a better alternative to the hegemonic relationships of dependency on the West that are predominantly used in development cooperation. As such, this source is placed at -10 citing very high \nlevels of collectivity."
            },
            "z": {
                "citation": "“As for the process or means of implementing SSC [South-South Cooperation], a moment when horizontality should be intermediating relations during cooperation activities, the analytical criteria for SSC initiatives would be: (1) it is conceived as a ‘policy of the common’ between the local and global levels;\n(2) it develops through democratic practices; (3) it connects the global to the local levels in the midst of a political and social federalism (decentralized governments), that is, it seeks to decide together on the common ones.”",
                "positioning": "This passage highlights how South-South Cooperation (SSC) toward decolonizing development work should proliferate all levels of policy and society. It should incorporate Southern voices and approaches to development but also make room for voices that were silenced in the past, not only creating cooperation between the Global South as it is known today but also the many indigenous knowledges that were previously marginalized by \ncolonization. Thus, this source ranks fairly high on the global south side of the axis at 9."
            }
        },
        "category": ["Academia"]
    },
    {
        "author": "Vij (OECD)",
        "shortTitle": "Developement Cooperation Report",
        "year": 2023,
        "x": -2,
        "y": -6,
        "z": 6,
        "axisInfo": {
            "x": {
                "citation": "“Localisation requires a thorough political economy analysis of both provider and recipient systems to identify latent risks it might pose to different actors, including those that might, at first glance, appear to benefit.”\n(p. 176)",
                "positioning": "Here, the author refers to localization in terms of greater local inclusion in development work. They call for a mutually beneficial agreement in which donors and external actors also benefit from localized development aid. This is framed within the context of current development systems while calling for greater localization of development cooperation. This source is not notably critical of the historical mechanisms of neo-imperialism to persist within this vision for development cooperation, taking a more diagnostic approach. Thus it lands at a -2 on the reform side of the scale."

            },
            "y": {
                "citation": "“Localisation has a long history, with roots in the push for participatory approaches beginning in the 1960s […]  \nAt the same time, differences in interpretations of the objectives and practice of localisation make it difficult for development co-operation providers to coalesce around a shared vision that would enable co-ordination between providers and accountability for results.\nThere also appears to be […] a state of “functional inertia”, where development actors are aware that localisation is needed but are unable to operationalise their vision.\nIn addition, there is a specific need for evidence on the benefits and challenges of different approaches to localisation, including how development agencies' and ministries’ institutional practices may either enable or hamper the achievement of locally led and inclusive development outcomes.\nCollectively building such an evidence base during this phase would help inform individual agency practice to push past the inertia.\nIt would also develop a shared understanding of localisation as both a process and an outcome, which” (OECD, 2023, p. 173)",
                "positioning": "This excerpt highlights the acknowledged need within Western development agencies for increased localization to empower local stakeholders in the Global South or recipient state. It highlights the importance of community building to pass on knowledge and build momentum away from dependency on foreign aid actors, but also addresses the systemic and bureaucratic barriers to achieving this from within development organizations. As such this lands at a -6 on the collective side of the axis as collectivity is a priority but \ndoes not necessarily provide recommendations on how this can be achieved making it more passive compared to other texts that are ranked higher."
            },
            "z": {
                "citation": "“Moving towards an equal partnership model can be perceived as giving up control or as detrimental to the vested interests of providers and intermediaries.\nLocalising development co-operation likely means that some actors could lose out financially.\nHowever, providers can emphasise that localisation is not a financial zero-sum game.\nLocalisation does not prevent opportunities for sharing, cross-border research and co-generation of knowledge.\nReimagining the role of the intermediary and exploring models to change the structure of bilateral aid delivery could enhance the case for a new aid business model, one in which local priorities and ownership steer development outcomes.”\n(p.176)",
                "positioning": "This excerpt while mentioning the importance of increasing local ownership within development cooperation highlights concerns of Western stakeholders who stand to lose financially from increased local autonomy. Nonetheless it still pushes for a shift away from these Western actors in favour of Global South actors who should be given the space to determine their own priorities and desired development outcomes. Given this perspective, the source ranks at a 6 on the Global South side. It acknowledges the downfalls of a shift away from Western powers and persists in supporting a need for greater Global South involvement."
            }
        },
        "category": ["Governments/Policy Statements"]
    },
    {
        "author": "WACSI",
        "shortTitle": "Decolonising Aid: Perspectives from \nCivil Society in Francophone Sub-saharan Africa",
        "year": 2023,
        "x": -5,
        "y": -8,
        "z": 9,
        "axisInfo": {
            "x": {
                "citation": "“4. Rebalancing forces in partnerships (35.7% of votes). 5. Increasing quality and access to capacity building programmes (34.7%) 6. Contribute to the respect of democratic values and good local governance (30.9%). 7. 7. Serving as a sidekick or companion (28.3%) 8. Contributing to the construction of ecosystems (21.3%) 9. Amplify local advocacy (20.4%)” (p.4)",
                "positioning": "This excerpt highlights a willingness of donor organizations to work within current systems and adjust them to better address the needs and demands of INGO partner organisations through better balancing of autonomy,  and taking a supporting role in development activities.\nIt does not suggest a drastic shift of current development systems, rather suggesting that it can be fixed and improved for good.\nWhile the paper is still critical of modern development work, it ranks at a -5 on the reform side of the axis."
            },
            "y": {
                "citation": "“Reviewing communication by reducing/ abandoning the use of technical jargon or words with racist connotation (37.7%). Indeed, language is a limiting factor to many small NGOs. Thus, changing communication discourses and practices will naturally influence the rest of the ecosystem”  (p.3)",
                "positioning": "Here the author highlights the reported emphasis on a systemic approach to decolonisation within INGOs through addressing racist, and technical jargon with the intention of this also shifting mindsets within the organisations.\nLanguage reforms are  third on the list of decolonising priorities placing this source at so ranks at -8 on the systemic side of the axis."
            },
            "z": {
                "citation": "“Facilitating access to local knowledge and expertise is considered the first priority with 45.3% of the votes. Indeed, the impact of development programmes largely depends on the effective inclusion of endogenous knowledge and local expertise, in order to increase the ownership and sustainability of the final project.”\n(p.3)",
                "positioning": "This excerpt highlights inclusion and support of local and indigenous knowledge as the biggest reported priority when attempting to decolonise development cooperation.\nIt ranks at a 9."
            }
        },
        "category": ["NGOs/Civil Society"]
    },
    {
        "author": "Icaza and Vázquez",
        "shortTitle": "The Politics of Decolonizing Development",
        "year": 2022,
        "x": 9,
        "y": -6,
        "z": 4,
        "axisInfo": {
            "x": {
                "citation": "“Decoloniality provides a radical critique of modernity, by affirming that there is no modernity without coloniality, thus the alternatives to development should not lead to a renewed configuration of modernity. Decoloniality reveals that to overcome the paradigm of development we also need to overcome the epistemic and aesthetic territory of modernity. Decoloniality signals a delinking grounded on the relational ontologies that have been dismissed or suppressed under the Western project of civilization. The decolonial horizons are non-anthropocentric, non-monocultural; they engage in recognizing and fostering relational worlds.”\n(p. 67) ",
                "positioning": "The text suggests a transformative perspective as it  states modern development is inherently tied to coloniality and that the solution is not to reform this flawed system, but to drastically change it.\nWhile it is not explicitly mentioned, in this context the text proposes that an alternative and highly transformative method would be suggested as a resolution.\nHowever, since it is not explicitly written this text ranks at a 9."
            },
            "y": {
                "citation": "“Our point of departure is that the notion of development cannot be separated from the history of Western modernity. Development has functioned at one and the same time as representation and articulation of the modern/colonial divide. The division between the human and the savage, between civilization and nature, lingers behind the notion of development. From our point of view, development belongs to the epistemic tradition of the West that has arrogated to itself the authority to classify the diversity of the Earth as nature and the diversity of \npeoples of the world as “others.” In other words: development belongs to a Eurocentric and anthropocentric epistemology whose identity as the geographical center and historical now of humanity depended on the externalization of the Earth and the peoples of the world as otherness.”\n(p. 62)",
                "positioning": "The text posits  how modern development work is a mechanism for othering of people within the Global South.\nWhile the authors speak of exclusion, there is also a sense of collectivism that comes out of the shared experience of exclusion by those in recipient nations, thus this ranks at a -6 for collectivism."
            },
            "z": {
                "citation": "“In this same vein, we consider that the project of development is conceptualized in a radically different way by those who have suffered its force and who have seen the denigration and even extinction of their ways of living and of their possibilities to inhabit the world. A view from the “epistemic South” reveals a crude image of development that does not correspond to its self-representation as progress and salvation. The coloniality of development is evident for those whose livelihoods have been disabled by development projects.”\n(p. 63) ",
                "positioning": "The text proposes an alternate view of development work from a Global South or recipient nations.\nThis perspective views development work as a mechanism that has historically dulled or snuffed out indigenous and non-western modes of existence.\nThe text is diagnostic and does not  propose this alternative perspective as a necessary solution, thus it only ranks at a 4."
            }
        },
        "category": ["Academia"]
    },
    {
        "author": "Meininghaus, Suárez, , Haidara, et al.",
        "shortTitle": "How to decolonise the Humanitarian-Development-Peace Nexus",
        "year": 2024,
        "x": -7,
        "y": -7,
        "z": 7,
        "axisInfo": {
            "x": {
                "citation": "“International donors should step up their efforts to reform their funding and reporting structures so that, as a first step, 25 per cent of aid per country is allocated directly to local aid organisations, as agreed in the Grand Bargain, and then gradually increased to 50 per cent according to clearly agreed timelines.”\n(p. 5)",
                "positioning": "This passage highlights explicit use of reform as the pathway to decolonising development work within the existing system.\nWith regard to funding, currently only 2.4-4% of aid funding is allotted to local NGOs, but the authors recommend that a minimum of 25% should be required with the aim of increasing it to 50% over time.\nThis still, however, depends on the willingness of largely Western aid actors.\nWhile the authors offer a very critical interpretation of the various flaws within the current system, they describe working within it.\nThus it falls at a -7 on the reform side of the axis."
            },
            "y": {
                "citation": "“UN agencies, INGOs and local NGOs must increase their accountability to the populations they serve. At present, aid agencies tend to be accountable to international donors outside the country, rather than to the people who receive (or do not receive) aid inside the country.”\n(p. 5)",
                "positioning": "Here the authors recommend that external development bodies should increase the level of accountability owed to recipient nations and local actors.\n–They are reportedly not the primary target audience of  development work which  favour  western audiences and authorities.\nAs such this highlights an opportunity for greater partnership which aligns with a more collective view of decolonizing development cooperation, thus landing the text at a -7 on the collective side of the axis."
            },
            "z": {
                "citation": "“UN agencies, international agencies and INGOs should hire local staff as a rule, and expatriates only in exceptional cases, such as when the required skills are not available among staff from the same locality or country. The aim is not to nationalise the job market but to redress structural inequalities in the global job market. Moreover, qualified local staff should be in decision-making positions from the local to national, regional and HQ/global levels.”\n(p. 2)",
                "positioning": "This recommendation highlights the prioritization of local expertise and contextual knowledge that is broadly lacking in the development space.\nA call for increased local authority and decision-making power places this source at a 7 on the Global South end of the axis ."
            }
        },
        "category": ["NGOs/Civil Society"]
    },
    {
        "author": "Kapazoglou and Goris",
        "shortTitle": "Decolonisation of development cooperation: Part III - The future is now: actionable pathways towards a decolonised development sector",
        "year": 2022,
        "x": -2,
        "y": 4,
        "z": 3,
        "axisInfo": {
            "x": {
                "citation": "“Words create worlds and as such communication has a vital role to play in transforming the sector’s vocabulary as well as dominant forms of representation and storytelling. An increasing number of organisations are working to rid development language of paternalistic and technocratic jargon, whilst creating space for more colourful and diverse linguistic expressions.”",
                "positioning": "This paper highlights how organizations must transform their operations and conduct including language and mindsets.\nWhile it uses the language of 'transformation' the target of its recommendation remains within the context of western development organizations–especially compared to other transformation-leaning texts.\nThus it is ranked at -2."
            },
            "y": {
                "citation": "[...]we, as development actors, can start out by acknowledging our possible contribution towards implicit racial biases and by identifying how such biases influence our thoughts, feelings and behaviours. Additionally, it is important to reflect on different aspects of our identity, such as race, gender, socioeconomic and educational status, to become aware of the privileges they grant us. [...] Addressing colonial mindsets, however, is not only an individual task, but also a responsibility of development organisations. Directors and managers, in particular, need to make room in staff’s agendas for meaningful conversations around colonialism’s effects on \ndevelopment cooperation, race and racism. And while reflexive conversations are bound to be deeply challenging, development organisations and practitioners should embrace the discomfort and take a take a hard look in the mirror to identify the colonial elements in their own work. Importantly, such conversations should not happen in a Northern bubble, but in collaboration with Southern organisations and partners, who can better recognise colonial prejudices and perceptions.”",
                "positioning": "While the authors highlight the importance of decolonizing work also happening at the organization level it is more so in the way of creating space for individual initiative whether its management or staff.\nThus it is on the collective side but just at a 4, since the source focuses highly on individual efforts."
            },
            "z": {
                "citation": "“A Thousand Currents, a U.S.-based grant-making NGO, has forged  a bottom-up, participatory approach to impact investment through its Buen Vivir Fund25. The fund, which supports grassroots economic initiatives that yield financial, environmental and social returns, operates through a member assembly, where grantees and investors have equal decision-making powers through their vote.26 Participatory grant-making, which ultimately”",
                "positioning": "While the authors do not explicitly outline any recommendations for decolonizing development, they draw on examples such as “A Thousand Currents” that favour Global South frameworks, which highlight increased autonomy and local participation and capacity building.\nIt falls at a 3, since it does not explicitly call for the use of Global South frameworks, but suggests examples that do."
            }
        },
        "category": ["NGOs/Civil Society"]
    },
    {
        "author": "Van Beurden",
        "shortTitle": "Restitution or Cooperation? Competing Visions of Post-Colonial Cultural Development in Africa",
        "year": 2015,
        "x": -1,
        "y": 0,
        "z": -8,
        "axisInfo": {
            "x": {
                "citation": "“Cahen wanted the term ‘restitution’ avoided at all cost because its use would imply an acknowledgment of the legitimacy of Congo’s interpretation of colonialism as exploitation.”\n(p. 11) ",
                "positioning": "This piece retells how the Belgian Tervuren Museum used language of development aid and cooperation to frame its controlled 'donation' of DRC's (Zaire's) artifacts back to the country of origin, contrary to the narrative of restitution posited by the Congolese stakeholders.\nIn so doing, it highlights how colonial powers did not and do not necessarily want to change the system of development cooperation to benefit developing nations at their expense.\nRather they often will uphold the façade of doing so all the while introducing new neo-colonial mechanisms of control.\nThis source acknowledges this issue from a more diagnostic perspective without taking a largely critical stance, thus it falls at a -1."
            },
            "y": {
                "citation": "",
                "positioning": "The criteria of this access are not addressed in the source."
            },
            "z": {
                "citation": "“The term restitution was inextricably bound up with a view of Belgian colonialism as a system of exploitation. Defining a transfer as ‘gift’ or ‘support’, on the other hand, affirmed Belgium’s self-image as a benevolent (former) colonizer. Not only did Tervuren hold on to almost its entire collection; its involvement with the IMNZ lent it an air of moral superiority and generosity. Ultimately, Belgium’s ability to define the transfer, its content, and its timing, made it more an act of domination than an exchange between equals. The use of language \nsuch as ‘development cooperation’, then, also reinforced an appearance of neutrality in a relationship that was plagued by historical inequalities.”",
                "positioning": "This passage highlights how the Belgian museum not only used language to maintain possession of Congolese artifacts but also a hegemonic relationship while positioning itself publicly as a gracious donour which was trying to help the Congolese government to build up its own museum and institutions around it that were deemed suitable by western standards to allow them to once again possess artifacts that were stolen from them in the first place.\nThis source, being prescriptive in nature, retells an instance in which an attempt to decolonize was twisted and used to further benefit the western institution.\nWhile it acknowledges the duplicitous nature of the Belgian museum and its management, it does not suggest anything for how the situation could have been avoided or improved.\nThus it simply highlights an example of an insincere attempt and rather extreme example of failed decolonising development cooperation by a Western stakeholder, thus it falls at a -8."
            }
        },
        "category": ["Governments/Policy Statements"]
    },
    {
        "author": "Goris and Magendane",
        "shortTitle": "Taking a historical perspective on the decolonization of aid",
        "year": 2021,
        "x": 4,
        "y": -4,
        "z": 2,
        "axisInfo": {
            "x": {
                "citation": "“Despite these difficult questions and ongoing complex interlinkages between colonialism and humanitarianism, our conclusion should by no means be the abolishment of humanitarian and development aid. […] In other words, while the current international aid system does have a colonial stain, it is possible to ‘save the baby’: We can decolonize the international aid system without losing or questioning the fundamental principles of humanitarianism and international solidarity.",
                "positioning": "This quote, while not providing specific recommendations for how development aid can be improved, however it does have a focus on humanitarianism \nframing development work in a way that emphasises solidarity and saving lives. It suggests that changes within development aid need to be made, citing critical perspectives from experts focussing on decolonising development, but does not specify these changes.\nAs such it argues for reform within transformation, but not to the same degree as more aggressively aligned papers, so it lands at a 4. "
            },
            "y": {
                "citation": "“True decolonization is achieved through a profound philosophical shift, Taithe explained. And this shift not only pertains to the ‘coloniser’ alone; it also demands the mental decolonization of the formerly colonised and those who are today’s recipients of aid. While formal and institutional decolonization was achieved, for the most part in the middle and late 20th century, this less tangible, social and psychological decolonization is not yet completed. The myth of the ‘white saviour’ and \ncolonial connotations are still present; perpetuated not in the least by the imagery of the poor, starving African that continues to drive the international aid system.”",
                "positioning": "This section calls for systemic dismantling of colonial ties through imagery and language, collective systems of colonisation that still linger in the minds of the formerly colonised, and current recipients of aid as well as those who work on the other side in development organizations.\nThis text calls for a profound shift suggesting transformation at the systemic level.\nIt suggests a collective effort must be made on both ends to disrupt colonial use of colonial mechanisms such as language and imagery placing it at -4."
            },
            "z": {
                "citation": "“True decolonization then, also means that we should not take ‘the West’ as epicentre of humanitarianism. Rather, Western development aid should be understood as one component of a much broader and global collection of efforts, movements and international relations.”",
                "positioning": "This section asserts that Western development practices and systems are not the only institutions capable of dictating development cooperation.\nRather they are just a part of a much larger system, suggesting there is room for Global South voices and practices in the development space.\nThis text acknowledges alternatives to Western development cooperation, however it is not explicit in identifying these alternatives so it lands at a  2 on the Global South side of the axis."
            }
        },
        "category": ["NGOs/Civil Society"]
    }
];

function normalizeDiamondsData() {
    diamondsData.forEach(d => {
        d.axisInfo ??= { x: { ...DEFAULT_AXIS_INFO }, y: { ...DEFAULT_AXIS_INFO }, z: { ...DEFAULT_AXIS_INFO } };
        d.axisInfo.x ??= { ...DEFAULT_AXIS_INFO };
        d.axisInfo.y ??= { ...DEFAULT_AXIS_INFO };
        d.axisInfo.z ??= { ...DEFAULT_AXIS_INFO };
        if (!Array.isArray(d.category)) {
            d.category = d.category ? [String(d.category)] : [];
        }
        d.x = Number.isFinite(d.x) ? d.x : 0;
        d.y = Number.isFinite(d.y) ? d.y : 0;
        d.z = Number.isFinite(d.z) ? d.z : 0;
        d.year = Number.isFinite(d.year) ? d.year : null;
    });
}

normalizeDiamondsData(); // Normalize initial data on module load

export function updateDiamondsData(newData) {
    // This allows main.js to update the central diamondsData array
    diamondsData = newData;
    normalizeDiamondsData(); // Ensure structure of new data
}