"use strict";
const ContentRoot = document.querySelector("#content");
const RenderFrom = [
    "vdsdv",
    {
        name: "První menu",
        opened: false,
        Items: [
            "vsdvsdvsd",
            {
                name: "vdsvsd",
                opened: false,
                text: `Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`
            },
            {
                opened: false,
                text: `Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`
            }
        ]
    },
    "Tohle je Paragraf" +
        "\n" +
        "Quis consequatur eaque expedita iste aut dolorem ut nemo. Minus dolore nostrum suscipit. Aut similique et ea. Sit inventore dolorem nulla illo. Facilis ea esse quibusdam. Ut molestias voluptas quibusdam maiores in tenetur doloremque molestiae.\n" +
        "\n" +
        "Dolor itaque odit cum qui. Esse sunt reiciendis maiores. Quam quidem error minus autem dolorem ex cupiditate et. Aut omnis accusamus velit dignissimos. Sapiente aliquam nemo dolorem perferendis voluptate velit dolorem.\n" +
        "\n" +
        "Maiores ut tenetur sequi culpa et. Et qui iusto est est ab ex expedita. Magni laboriosam omnis dolorem necessitatibus. Accusamus nesciunt velit eaque ea molestiae et voluptatum.\n" +
        "\n" +
        "Voluptatibus qui minus consequatur corrupti sed suscipit. Ut dolor et sapiente non est. Voluptatem aperiam eos voluptate temporibus eum. Quasi nihil aut officia quis commodi. Quisquam sunt dolorem hic unde et nobis et commodi. Fuga sunt praesentium nihil mollitia.\n" +
        "\n" +
        "Ut et illo repellat. Enim et facere molestiae. Earum nihil rerum commodi ut nostrum et harum voluptate. Quas natus quo sint modi. Excepturi quia perspiciatis quia dolorem aspernatur.",
    {
        name: "Druhé",
        opened: false,
        Items: [
            "vsdvsdvsd",
            {
                name: "vdsvsd",
                opened: false,
                text: "vdsvsdvs"
            },
            {
                opened: false,
                text: "vsdvdsvsd"
            }
        ]
    }
];
const DomContent = [];
let BigContentRef;
let SmallContentRef;
window.addEventListener("scroll", () => {
    if (BigContentRef) {
        if (SmallContentRef) {
            // TODO: fix fixed -200
            if (window.scrollY >= SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25) {
                window.scrollTo(0, SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25);
            }
        }
        else if (window.scrollY >= BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25) {
            window.scrollTo(0, BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25);
        }
    }
});
function OnMainPanelClick(item) {
    SmallContentRef = null;
    if (RenderFrom[item].opened) {
        DomContent[item].mainHeader.classList.remove("Open");
        DomContent[item].mainContent.content.classList.remove("Open");
        RenderFrom[item].opened = false;
        // Close small posts
        for (let i = 0; i < RenderFrom[item].Items.length; i++) {
            if (typeof RenderFrom[item].Items[i] !== "string") {
                DomContent[item].mainContent.children[i]?.root.classList.remove("Open");
                RenderFrom[item].Items[i].opened = false;
            }
        }
        BigContentRef = null;
    }
    else {
        // Close Main posts
        for (let i = 0; i < RenderFrom.length; i++) {
            if (RenderFrom[i].opened) {
                // Close Small posts
                for (let j = 0; j < RenderFrom[i].Items.length; j++) {
                    if (typeof RenderFrom[i].Items[j] !== "string") {
                        DomContent[i].mainContent.children[j]?.root.classList.remove("Open");
                        RenderFrom[i].Items[j].opened = false;
                    }
                }
                DomContent[i].mainHeader.classList.remove("Open");
                DomContent[i].mainContent.content.classList.remove("Open");
                RenderFrom[i].opened = false;
            }
        }
        DomContent[item].mainHeader.classList.add("Open");
        DomContent[item].mainContent.content.classList.add("Open");
        console.log(DomContent[item].mainContent.childrenRoot);
        BigContentRef = DomContent[item].mainContent.childrenRoot;
        RenderFrom[item].opened = true;
    }
}
function OnSmallPanelClick(i, j) {
    if (RenderFrom[i].Items[j].opened) {
        DomContent[i].mainContent.children[j].root.classList.remove("Open");
        RenderFrom[i].Items[j].opened = false;
        SmallContentRef = null;
    }
    else {
        for (let item = 0; item < RenderFrom[i].Items.length; item++) {
            if (typeof RenderFrom[i].Items[item] !== "string") {
                DomContent[i].mainContent.children[item]?.root.classList.remove("Open");
                RenderFrom[i].Items[item].opened = false;
            }
        }
        DomContent[i].mainContent.children[j].root.classList.add("Open");
        RenderFrom[i].Items[j].opened = true;
        SmallContentRef = DomContent[i].mainContent.children[j].root ?? DomContent[i].mainContent.children[j];
    }
}
function RenderPosts() {
    const reference = [];
    let i = 0;
    // Going through each key in RenderFrom
    for (const item of RenderFrom) {
        // Checking if the item is only paragraph
        if (typeof item === "string") {
            // Save and set type if element
            // Create paragraph
            const paragraph = document.createElement("paragraph");
            paragraph.innerText = item;
            console.log(paragraph.innerText);
            // Put paragraph into content root
            document.body.appendChild(paragraph);
        }
        // Else it is panel
        else {
            // Save and set type if element
            const rendered = item;
            const MainPanel = document.createElement("div");
            MainPanel.classList.add("MainPanel");
            const MainPanelHeader = document.createElement("div");
            MainPanelHeader.classList.add("MainPanelHeader");
            MainPanelHeader.classList.add("pure-menu-heading");
            MainPanelHeader.classList.add("pure-button");
            const passValue = i;
            MainPanelHeader.addEventListener("click", () => { OnMainPanelClick(passValue); });
            // Creating Panel Header
            const PanelTitle = document.createElement("h2");
            const PanelOpenSpan = document.createElement("span");
            const PanelTitleSpan = document.createElement("span");
            PanelOpenSpan.innerText = ">";
            PanelOpenSpan.classList.add("PanelOpenSpan");
            PanelTitle.appendChild(PanelOpenSpan);
            PanelTitleSpan.innerText = item.name;
            PanelTitle.appendChild(PanelTitleSpan);
            MainPanelHeader.appendChild(PanelTitle);
            document.body.appendChild(MainPanelHeader);
            // Creating panel content
            const PanelContent = document.createElement("div");
            PanelContent.classList.add("MainPanelContent");
            console.log(rendered.opened);
            if (rendered.opened) {
                PanelContent.classList.add("Open");
            }
            DomContent[i] = {
                root: MainPanel,
                mainHeader: MainPanelHeader,
                mainContent: {
                    content: PanelContent,
                    childrenRoot: null,
                    children: []
                }
            };
            let j = 0;
            // Creating items
            for (const smallItem of rendered.Items) {
                if (typeof smallItem === "string") {
                    const smallRendered = smallItem;
                    const paragraph = document.createElement("paragraph");
                    paragraph.innerText = smallRendered;
                    PanelContent.appendChild(paragraph);
                }
                else if (!smallItem.name) {
                    const smallRendered = smallItem;
                    const smallDiv = document.createElement("div");
                    smallDiv.classList.add("Rollable");
                    const paragraph = document.createElement("p");
                    paragraph.innerText = smallItem.text;
                    const hiderDiv = document.createElement("div");
                    smallDiv.appendChild(paragraph);
                    smallDiv.appendChild(hiderDiv);
                    if (!smallRendered.opened) {
                        smallDiv.classList.add("Hidable");
                    }
                    smallDiv.addEventListener('click', () => {
                        console.log("clicked");
                        smallDiv.classList.remove('Hidable');
                    });
                    PanelContent.appendChild(smallDiv);
                }
                else {
                    const smallRendered = smallItem;
                    const SmallPanel = document.createElement("div");
                    SmallPanel.classList.add("SmallPanel");
                    const SmallPanelHeader = document.createElement("button");
                    const iConst = i;
                    const jConst = j;
                    SmallPanelHeader.addEventListener("click", () => { OnSmallPanelClick(iConst, jConst); });
                    SmallPanelHeader.classList.add("SmallPanelHeader");
                    SmallPanelHeader.classList.add("pure-menu-heading");
                    SmallPanelHeader.classList.add("pure-button");
                    // Creating Small Panel Header
                    const SmallPanelTitle = document.createElement("h3");
                    const SmallPanelOpenSpan = document.createElement("span");
                    SmallPanelOpenSpan.innerText = ">";
                    SmallPanelOpenSpan.classList.add("PanelOpenSpan");
                    SmallPanelTitle.appendChild(SmallPanelOpenSpan);
                    const SmallPanelTitleSpan = document.createElement("span");
                    SmallPanelTitleSpan.innerText = smallItem.name ?? '';
                    SmallPanelTitle.appendChild(SmallPanelTitleSpan);
                    SmallPanelHeader.appendChild(SmallPanelTitle);
                    SmallPanel.appendChild(SmallPanelHeader);
                    // Creating Small panel content
                    const SmallPanelContent = document.createElement("paragraph");
                    SmallPanelContent.classList.add("SmallPanelContent");
                    SmallPanelContent.innerText = smallRendered.text;
                    if (smallRendered.opened) {
                        SmallPanelContent.classList.add("Open");
                    }
                    SmallPanel.appendChild(SmallPanelContent);
                    PanelContent.appendChild(SmallPanel);
                    DomContent[i].mainContent.children[j] = {
                        root: SmallPanel,
                        smallHeader: SmallPanelHeader,
                        smallContent: SmallPanelContent
                    };
                    DomContent[i].mainContent.childrenRoot = PanelContent;
                }
                j++;
            }
            document.body.appendChild(PanelContent);
        }
        i++;
    }
}
RenderPosts();
