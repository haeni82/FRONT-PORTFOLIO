// Test file to verify data structure - can be removed later
import {
  portfolioContent,
  getFeaturedProjects,
  getArchiveProjects,
  aboutContent,
  developerIdentity,
} from './index';

// Test data structure
console.log('Portfolio Data Structure Test:');
console.log('✅ Profile:', portfolioContent.profile.name);
console.log('✅ Total Projects:', portfolioContent.projects.length);
console.log('✅ Featured Projects:', getFeaturedProjects().length);
console.log('✅ Archive Projects:', getArchiveProjects().length);
console.log('✅ Timeline Items:', portfolioContent.timeline.items.length);
console.log(
  '✅ Tech Categories:',
  Object.keys(portfolioContent.techStack.categories).length
);
console.log('✅ About Content:', aboutContent.introduction.length > 0);
console.log('✅ Developer Traits:', developerIdentity.traits.length);

// Verify featured projects count is exactly 3
const featuredCount = getFeaturedProjects().length;
if (featuredCount === 3) {
  console.log('✅ Featured projects count is correct (3)');
} else {
  console.error('❌ Featured projects count is wrong:', featuredCount);
}

// Verify archive projects count is 6+
const archiveCount = getArchiveProjects().length;
if (archiveCount >= 6) {
  console.log('✅ Archive projects count is sufficient (6+):', archiveCount);
} else {
  console.error('❌ Archive projects count is insufficient:', archiveCount);
}

export {}; // Make this a module
