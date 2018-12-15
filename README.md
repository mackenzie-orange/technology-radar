# QuoteCenter Technology Radar <a href="https://hdqc.slack.com/app_redirect?channel=technology-radar"><img src="https://img.shields.io/badge/slack-%23technology--radar-ff69b4.svg"></a>

Technology Radar is a listing of technologies and methodologies adopted (or on their way to adoption) at QC.  Where they are on that path is represented by a set of concentric rings approaching and peaking with adoption, followed by a path that they take on their way out of adoption.

## Who manages the Technology Radar?

Additions, subtractions, and ring moves can be submitted as a PR at any time by anyone. The approval or denial of the PR is managed by Engineering Managers and Principal Engineers.

If, for any reason, a PR is denied, the reasons for the denial will be posted in #technology-radar.

## Why are we not using the Thoughtworks-hosted radar option anymore?

It was discussed that continuing with the file format and visualizations produced by Thoughtworks does not necessarily answer the needs of QuoteCenter and how we would choose to implement such a system.  While we like the radar metaphor and the idea of concentric rings approaching a center that approximates the process of adoption of new technologies, some of the rings were not easy to reason about within our group dynamic and were better fits for large consulting organizations (like Thoughtworks) that are attempting to keep a distributed workforce of consultants aligned with a singular technical vision and message.  We also felt that the infrequent review processes and closed-door discussions would not be a good fit with our desire for agility and visibility.

Having broken free from the originating Thoughtworks elements, we found ourselves free to manage categories, rings, and blips (and their visualizations) in whatever way we felt beneficial to our needs.  Therefore, we have moved the blips into JSON-formatted files so that they are easy to read by humans and applications, alike.

# Radar Structure

Blips are the foundational units representing specific technologies and methodologies.  They are organized by category files in the "blips" directory.  

## Categories

Each category file contains all blips in the given category.  You can create new category files if you feel they are necessary.  The same review process outlined in the CONTRIBUTING.md document will be followed.

Current Categories:
 - Frameworks
 - Languages
 - Platforms
 - Techniques
 - Tools

## Rings

The rings of the radar represent the path toward adoption for a blip.  Each ring sets forward criteria defining characteristics indicative of membership within that ring.  

 - Hold: Wait for this to mature
 - Assess: Worth exploring
 - Trial: Strong recommendation; Being tested in a current project
 - Adopt: The current standard; "Paved road" exists or is being delivered
 - Sunset: Do not use; Migrate existing instances to replacement option

## Blip

The blip category files are formatted using JSON.  Each category file is comprised of an array of objects.  Each object in the array is a blip.

Each object MUST contain values for the following keys:
 - blip: Common name of the blip
 - ring: Ring in which the blip currently resides
 - description: An explanation of how and where the blip may be used. 
 - contact: \[OPTIONAL\] Primary contact for information about how/where the blip is being assessed or trialed
