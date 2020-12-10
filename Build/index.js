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
                name: "ddddd",
                opened: false,
                text: "ssssss"
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
document.addEventListener("scroll", () => {
});
function OnMainPanelClick(item) {
    console.log(item);
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
        RenderFrom[item].opened = true;
    }
}
function OnSmallPanelClick(i, j) {
    if (RenderFrom[i].Items[j].opened) {
        DomContent[i].mainContent.children[j].root.classList.remove("Open");
        RenderFrom[i].Items[j].opened = false;
    }
    else {
        for (let item = 0; item < RenderFrom[i].Items.length; item++) {
            if (typeof RenderFrom[i].Items[item] !== "string") {
                DomContent[i].mainContent.children[item]?.root.classList.remove("Open");
                RenderFrom[i].Items[item].opened = false;
            }
        }
        DomContent[i].mainContent.children[j].root.classList.add("Open");
        console.log(RenderFrom);
        console.log(i);
        console.log(j);
        RenderFrom[i].Items[j].opened = true;
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
                    const paragraph = document.createElement("paragraph");
                    if (!smallRendered.opened) {
                        paragraph.classList.add("hidable");
                    }
                    PanelContent.appendChild(paragraph);
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
                }
                j++;
            }
            document.body.appendChild(PanelContent);
        }
        i++;
    }
}
RenderPosts();
