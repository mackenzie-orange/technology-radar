# How To Contibute

As part of the focus on _collaboration and adaptability around determining standards_, the Technology Radar is open to contributions by all
 Changing the Standards should be an easy and welcoming process
 
## Release Cadence
 In order to balance the chaos and churn of constantly shifting goals, the Standards will be published on a recurring cadence of `once every month`

## Change Process

At any point in time, you can:
 - Get ad hoc feedback
   - Ask a question in the #technology-radar slack channel
 - Create a PR
   - Open a PR with changes you wish to see
   - Include a description of the changes, and reasoning to support the change
   - Reach out to peers for feedback and opinions
   - Include a radar steward to approve and merge your change
   
One week before the candenced release date, the stewards will:
 - Accumulate any merged changes since the last release
 - Post a pending change list in #technology-radar
 - Discuss blip changes, commit any changes that are not challenged and, subsequently, removed

On release day, a steward will:
 - Bump the version
 - Publish new version of the Technology Radar
 - Notify via #engineering of published changes

## Versioning Strategy

The Technology Radar is versioned using canonical-date

The format is `YYYY.MM.Release`, for example:
 - `2018.12.1`
 
This versioning strategy was chosen because ability to identify the epoch is valuable.

Other strategies like SemVer were avoided, as the majority of changes will be semantically Major bumps, with rare use of Minor or Patch indicators

Deprecation of historical versions is undecided, but will be reevaluated after 3~4 cycles as adoption rate becomes measurable
 
Any techniques, tools, platforms, languages, or frameworks in production use prior to initial adoption of the radar are considered to be in the "Sunset" ring
