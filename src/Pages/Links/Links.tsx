import { MarkdownPage } from '../../Common/Markdown/MarkdownPage';
import { PageLayout } from '../../Common/PageLayout/PageLayout';

const linksPageComponents = {
    h4: () => null,
    // ['hall-of-fame']: () => <HallOfFame />,
};

const Links = () => {
    //  // Extract unique descending hall of fame selection years
    //  const selectionYears = extractSelectionYears(data.hallOfFame.edges);

    //  const newHeadings = data.links.headings
    //      .map((heading) => {
    //          const { value, depth } = heading;
    //          // Inject project headings
    //          if (value === 'hall-of-fame-headers') {
    //              return selectionYears
    //                  .map((year) => {
    //                      const projectSelection = [
    //                          ...data.hallOfFame.edges,
    //                      ].filter(({ node }) => node.frontmatter.year === year);

    //                      const selectionHeader = {
    //                          value: buildSelectionHeader(year),
    //                          depth: depth - 2,
    //                      };
    //                      return [
    //                          selectionHeader,
    //                          ...injectProjectHeaders(
    //                              projectSelection,
    //                              true,
    //                              depth - 1
    //                          ),
    //                      ];
    //                  })
    //                  .flat();
    //          }

    //          return heading;
    //      })
    //      .flat();

    return (
        <PageLayout title='Links'>
            <MarkdownPage title='Useful Links' markdownSrc='Pages/Links' components={linksPageComponents} />
        </PageLayout>
    );
};

export default Links;
