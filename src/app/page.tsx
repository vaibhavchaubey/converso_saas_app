import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import {
  getAllCompanions,
  getBookmarkedCompanionsIds,
  getRecentSessions,
} from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);
  const bookmarkedCompanionsIds = await getBookmarkedCompanionsIds();

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            bookmarked={bookmarkedCompanionsIds.includes(companion.id)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completed lessons"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
