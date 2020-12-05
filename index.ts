type SmallPost = {
    name: string | null,
    opened: boolean,
    text: string
}

type MainPost = {
    name: string,
    opened: boolean,
    Items: Array<SmallPost | string>;
}

type PostStructure = Array<MainPost | string>;



type DomRef = Array<
    {
        root: HTMLDivElement,
        mainHeader: HTMLButtonElement,
        mainContent: DomRefMainContent
    }
    >;

type DomRefMainContent = {
    content: HTMLDivElement,
    children: Array<
        DomRefSmallContent
        | HTMLParagraphElement
        >
}
type DomRefSmallContent = {
    root: HTMLDivElement
    smallHeader: HTMLButtonElement
    smallContent: HTMLParagraphElement
}

const ContentRoot = document.querySelector("#content");

const RenderFrom: PostStructure = [
    "vdsdv",
    {
        name: "První menu",
        opened: false,
        Items: [
            "vsdvsdvsd",
            {
                name: "vdsvsd",
                opened: false,
                text: "vdsvsdvs"
            } as SmallPost,
            {
                opened: false,
                text: "vsdvdsvsd"
            } as SmallPost

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
            } as SmallPost,
            {
                opened: false,
                text: "vsdvdsvsd"
            } as SmallPost

        ]
    }
]

const DomContent: DomRef = [];


function OnMainPanelClick(item: number) {
    console.log(item);
    if ((RenderFrom[item] as MainPost).opened) {
        console.log("dsvds");
        DomContent[item].root.classList.remove("Open");
        (RenderFrom[item] as MainPost).opened = false;
        // Close small posts
        for (let i = 0; i < (RenderFrom[item] as MainPost).Items.length; i++) {
            if (typeof (RenderFrom[item] as MainPost).Items[i] !== "string") {
                (DomContent[item].mainContent.children[i] as DomRefSmallContent)?.root.classList.remove("Open");
                ((RenderFrom[item] as MainPost).Items[i] as SmallPost).opened = false;
            }
        }
    } else {
        // Close Main posts
        for (let i = 0; i < RenderFrom.length; i++) {
            if ((RenderFrom[i] as MainPost).opened) {
                // Close Small posts
                for (let j = 0; j < (RenderFrom[i] as MainPost).Items.length; j++) {
                    if (typeof (RenderFrom[i] as MainPost).Items[j] !== "string") {
                        (DomContent[i].mainContent.children[j] as DomRefSmallContent)?.root.classList.remove("Open");
                        ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = false;
                    }
                }
                DomContent[i].root.classList.remove("Open");
                (RenderFrom[i] as MainPost).opened = false;
            }
        }
        DomContent[item].root.classList.add("Open");
        (RenderFrom[item] as MainPost).opened = true;
    }
}
function OnSmallPanelClick(i: number, j: number) {
    if (((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened) {
        ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = false;
    } else {
        for (let item of (RenderFrom[i] as MainPost).Items) {
            if (typeof item === "object") {
                item.opened = false;
            }
        }
        ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = true;
    }
}

function RenderPosts() {
    const reference: DomRef = []
    let i = 0;
    // Going through each key in RenderFrom
    for (const item of RenderFrom) {
        // Checking if the item is only paragraph
        if (typeof item === "string") {
            // Save and set type if element
            // Create paragraph
            const paragraph = document.createElement("paragraph") as HTMLParagraphElement;
            paragraph.innerText = item;
            console.log(paragraph.innerText);
            // Put paragraph into content root
            ContentRoot?.appendChild(paragraph);
        }
        // Else it is panel
        else {
            // Save and set type if element
            const rendered = item as MainPost;
            const MainPanel = document.createElement("div") as HTMLDivElement;
            MainPanel.classList.add("MainPanel");
            const MainPanelHeader = document.createElement("button") as HTMLButtonElement;
            MainPanelHeader.classList.add("MainPanelHeader");
            MainPanelHeader.classList.add("pure-menu-heading");
            MainPanelHeader.classList.add("pure-button");
            const passValue = i;
            MainPanelHeader.addEventListener("click", () => {OnMainPanelClick(passValue);})

            // Creating Panel Header
            const PanelTitle = document.createElement("h2") as HTMLHeadingElement;
            const PanelOpenSpan = document.createElement("span") as HTMLSpanElement;
            const PanelTitleSpan = document.createElement("span") as HTMLSpanElement;
            PanelOpenSpan.innerText = ">";
            PanelOpenSpan.classList.add("PanelOpenSpan");
            PanelTitle.appendChild(PanelOpenSpan);
            PanelTitleSpan.innerText = item.name;
            PanelTitle.appendChild(PanelTitleSpan);
            MainPanelHeader.appendChild(PanelTitle);
            MainPanel.appendChild(MainPanelHeader);

            // Creating panel content
            const PanelContent = document.createElement("div") as HTMLDivElement;
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
            }
            let j = 0;
            // Creating items
            for (const smallItem of rendered.Items) {
                if (typeof smallItem === "string") {
                    const smallRendered = smallItem as string;
                    const paragraph = document.createElement("paragraph") as HTMLParagraphElement;
                    paragraph.innerText = smallRendered;
                    PanelContent.appendChild(paragraph);
                } else if (!(smallItem as SmallPost).name) {
                    const smallRendered = smallItem as SmallPost;
                    const paragraph = document.createElement("paragraph") as HTMLParagraphElement;
                    if (!smallRendered.opened) {
                        paragraph.classList.add("hidable");
                    }
                    PanelContent.appendChild(paragraph);
                } else {
                    const smallRendered = smallItem as SmallPost;

                    const SmallPanel = document.createElement("div") as HTMLDivElement;
                    SmallPanel.classList.add("SmallPanel");
                    const SmallPanelHeader = document.createElement("button") as HTMLButtonElement;
                    SmallPanelHeader.addEventListener("click", () => {OnSmallPanelClick(i, j)})

                    SmallPanelHeader.classList.add("SmallPanelHeader");
                    SmallPanelHeader.classList.add("pure-menu-heading");
                    SmallPanelHeader.classList.add("pure-button");

                    // Creating Small Panel Header
                    const SmallPanelTitle = document.createElement("h3") as HTMLHeadingElement;
                    const SmallPanelOpenSpan = document.createElement("span") as HTMLSpanElement;
                    SmallPanelOpenSpan.innerText = smallRendered.opened ? "V " : "> ";
                    SmallPanelTitle.appendChild(SmallPanelOpenSpan);
                    const SmallPanelTitleSpan = document.createElement("span") as HTMLSpanElement;
                    SmallPanelTitleSpan.innerText = smallItem.name ?? '';
                    SmallPanelTitle.appendChild(SmallPanelTitleSpan);
                    SmallPanelHeader.appendChild(SmallPanelTitle);
                    SmallPanel.appendChild(SmallPanelHeader);

                    // Creating Small panel content
                    const SmallPanelContent = document.createElement("paragraph") as HTMLParagraphElement;
                    SmallPanelContent.classList.add("SmallPanelContent");
                    SmallPanelContent.innerText = smallRendered.text;
                    if (smallRendered.opened) {
                        SmallPanelContent.classList.add("Open");
                    }
                    SmallPanel.appendChild(SmallPanelContent);
                    PanelContent.appendChild(SmallPanel);
                    (DomContent[i].mainContent.children[j] as DomRefSmallContent) = {
                        root: SmallPanel,
                        smallHeader: SmallPanelHeader,
                        smallContent: SmallPanelContent
                    };
                }
            }
            MainPanel.appendChild(PanelContent);

            // Put panel into content root
            ContentRoot?.appendChild(MainPanel);
        }
        i++;
    }
}

RenderPosts();