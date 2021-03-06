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
        mainHeader: HTMLDivElement,
        mainContent: DomRefMainContent
    }
    >;

type DomRefMainContent = {
    content: HTMLDivElement,
    childrenRoot: HTMLDivElement | null,
    children: Array<
        DomRefSmallContent
        | HTMLParagraphElement
        | HTMLDivElement
        >
}
type DomRefSmallContent = {
    root: HTMLDivElement
    smallHeader: HTMLDivElement
    smallContent: HTMLParagraphElement
}

const ContentRoot = document.querySelector("#content");

const RenderFrom: PostStructure = [
    `Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
    Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
    Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
    Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
    Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
    Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`,
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
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`
            } as SmallPost,
            {
                opened: false,
                text: `Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`
            } as SmallPost

        ]
    },
    `
    Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugIste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.
                Iste repellendus accusamus distinctio et omnis. Sed aut earum sapiente. Quis autem quidem commodi voluptatem impedit.
                Voluptatum nihil non fugiat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.iat dolorem impedit aliquam reprehenderit. Aut quibusdam mollitia labore voluptatibus ut. Delectus et sit labore ut molestiae quasi iusto. Autem praesentium voluptatem in. Quisquam doloremque velit fugit consequatur impedit cum. Voluptate et ut et accusantium eveniet sunt.
                Sed illum voluptate sed dolores. Atque illo corporis cumque minus incidunt iure illum est. Non quia doloribus culpa earum.
                Corrupti libero non illum ea. Voluptate odio voluptates nisi quis. Ab maiores natus est consequuntur. Ex accusantium sunt maiores. Est dolores necessitatibus odit enim.
                Earum quas est dolor sed nostrum odit. Tenetur repellat itaque enim rerum ea recusandae assumenda ea. Praesentium possimus nemo ad cupiditate aliquid.`,
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

let BigContentRef: HTMLDivElement | null;
let BigHeaderTop: number;
let SmallContentRef: HTMLDivElement | null;
let SmallHeaderTop: number;

window.addEventListener("scroll", () => {
    if (BigContentRef) {
        if (SmallContentRef) {
            console.log(SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25);
            console.log(SmallHeaderTop);
            if (window.scrollY >= SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25 && SmallHeaderTop - 85 <= SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25) {
                window.scrollTo(0, SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25);
            } else if (SmallHeaderTop - 85 <= window.scrollY && window.scrollY >= SmallContentRef.offsetTop + SmallContentRef.clientHeight - window.innerHeight / 1.25) {
                console.log("vsvds");
                window.scrollTo(0, SmallHeaderTop - 85);
            }
        } else if (window.scrollY >= BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25 && BigHeaderTop - 50 <= BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25) {
            window.scrollTo(0, BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25);
        } else if (BigHeaderTop - 50 <= window.scrollY && window.scrollY >= BigContentRef.offsetTop + BigContentRef.clientHeight - window.innerHeight / 1.25) {
            window.scrollTo(0, BigHeaderTop - 50);
        }
    }
})

function OnMainPanelClick(item: number) {
    SmallContentRef = null;
    SmallHeaderTop = -1;
    if ((RenderFrom[item] as MainPost).opened) {
        if (scrollY >= BigHeaderTop - 50) {
            window.scrollTo(0, BigHeaderTop - 50);
        }
        DomContent[item].mainHeader.classList.remove("Open");
        DomContent[item].mainContent.content.classList.remove("Open");
        (RenderFrom[item] as MainPost).opened = false;
        // Close small posts
        for (let i = 0; i < (RenderFrom[item] as MainPost).Items.length; i++) {
            if (typeof (RenderFrom[item] as MainPost).Items[i] !== "string") {
                ((DomContent[item].mainContent.children[i] as DomRefSmallContent)?.root
                ?? DomContent[item].mainContent.children[i] as HTMLDivElement)
                    .classList.remove("Open");
                ((RenderFrom[item] as MainPost).Items[i] as SmallPost).opened = false;
            }
        }
        BigContentRef = null;
        BigHeaderTop = -1;
    } else {
        // Close Main posts
        for (let i = 0; i < RenderFrom.length; i++) {
            if ((RenderFrom[i] as MainPost).opened) {
                // Close Small posts
                for (let j = 0; j < (RenderFrom[i] as MainPost).Items.length; j++) {
                    if (typeof (RenderFrom[i] as MainPost).Items[j] !== "string") {
                        if ((DomContent[i].mainContent.children[j] as DomRefSmallContent).root) {
                            (DomContent[i].mainContent.children[j] as DomRefSmallContent)?.root.classList.remove("Open");
                            ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = false;
                        }
                    }
                }
                DomContent[i].mainHeader.classList.remove("Open");
                DomContent[i].mainContent.content.classList.remove("Open");
                (RenderFrom[i] as MainPost).opened = false;
            }
        }
        console.log(DomContent[item].mainContent.content);
        DomContent[item].mainHeader.classList.add("Open");
        DomContent[item].mainContent.content.classList.add("Open");
        BigContentRef = DomContent[item].mainContent.childrenRoot;
        BigHeaderTop = DomContent[item].mainHeader.offsetTop;
        (RenderFrom[item] as MainPost).opened = true;
    }
}
function OnSmallPanelClick(i: number, j: number) {
    if (((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened) {
        if (scrollY >= SmallHeaderTop - 85) {
            window.scrollTo(0, SmallHeaderTop - 85);
        }
        (DomContent[i].mainContent.children[j] as DomRefSmallContent).root.classList.remove("Open");
        ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = false;
        SmallContentRef = null;
        SmallHeaderTop = -1;
    } else {
        for (let item = 0; item < (RenderFrom[i] as MainPost).Items.length; item++) {
            if (typeof (RenderFrom[i] as MainPost).Items[item] !== "string") {
                if ((DomContent[i].mainContent.children[item] as DomRefSmallContent).root) {
                    (DomContent[i].mainContent.children[item] as DomRefSmallContent)?.root.classList.remove("Open");
                    ((RenderFrom[i] as MainPost).Items[item] as SmallPost).opened = false;
                }
            }
        }
        (DomContent[i].mainContent.children[j] as DomRefSmallContent).root.classList.add("Open");
        ((RenderFrom[i] as MainPost).Items[j] as SmallPost).opened = true;
        SmallContentRef = (DomContent[i].mainContent.children[j] as DomRefSmallContent).root ?? DomContent[i].mainContent.children[j];
        SmallHeaderTop = (DomContent[i].mainContent.children[j] as DomRefSmallContent).root.offsetTop ?? DomContent[i].mainHeader.offsetTop;
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
            document.body.appendChild(paragraph);
        }
        // Else it is panel
        else {
            // Save and set type if element
            const rendered = item as MainPost;
            const MainPanel = document.createElement("div") as HTMLDivElement;
            MainPanel.classList.add("MainPanel");
            const MainPanelHeader = document.createElement("div") as HTMLDivElement;
            MainPanelHeader.classList.add("MainPanelHeader");
            MainPanelHeader.classList.add("pure-menu-heading");
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
            document.body.appendChild(MainPanelHeader);

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
                    childrenRoot: null,
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
                    const smallDiv = document.createElement("div") as HTMLDivElement;
                    smallDiv.classList.add("Rollable");
                    const paragraph = document.createElement("p") as HTMLParagraphElement;
                    paragraph.innerText = (smallItem as SmallPost).text;
                    const hiderDiv = document.createElement("div") as HTMLDivElement;
                    smallDiv.appendChild(paragraph);
                    smallDiv.appendChild(hiderDiv);
                    smallDiv.addEventListener('click', () => {
                        console.log("clicked");
                        smallDiv.classList.add('Open');
                    });
                    DomContent[i].mainContent.children[j] = smallDiv;
                    PanelContent.appendChild(smallDiv);
                } else {
                    const smallRendered = smallItem as SmallPost;

                    const SmallPanel = document.createElement("div") as HTMLDivElement;
                    SmallPanel.classList.add("SmallPanel");
                    const SmallPanelHeader = document.createElement("div") as HTMLDivElement;
                    const iConst = i;
                    const jConst = j;
                    SmallPanelHeader.addEventListener("click", () => {OnSmallPanelClick(iConst, jConst)})
                    SmallPanelHeader.classList.add("SmallPanelHeader");
                    SmallPanelHeader.classList.add("pure-menu-heading");

                    // Creating Small Panel Header
                    const SmallPanelTitle = document.createElement("h3") as HTMLHeadingElement;
                    const SmallPanelOpenSpan = document.createElement("span") as HTMLSpanElement;
                    SmallPanelOpenSpan.innerText = ">";
                    SmallPanelOpenSpan.classList.add("PanelOpenSpan");
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