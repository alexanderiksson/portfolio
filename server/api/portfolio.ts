import { createClient, type EntryFieldTypes, type EntrySkeletonType } from "contentful";

interface PortfolioFields {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    githubLink: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

interface PortfolioEntry extends EntrySkeletonType {
    fields: PortfolioFields;
    contentTypeId: "portfolio";
}

export default defineEventHandler(async () => {
    const config = useRuntimeConfig();

    const client = createClient({
        space: config.public.contentfulSpaceId,
        accessToken: config.contentfulAccessToken,
    });

    try {
        const { items } = await client.getEntries<PortfolioEntry>({
            content_type: "portfolio",
            order: ["-sys.createdAt"],
        });

        return items.map((item) => ({
            title: item.fields.title,
            description: item.fields.description,
            image:
                item.fields.image && "fields" in item.fields.image
                    ? item.fields.image.fields?.file?.url
                    : undefined,
            githubURL: item.fields.githubLink,
            tags: item.fields.tags || [],
        }));
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: "Error fetching portfolio",
        });
    }
});
