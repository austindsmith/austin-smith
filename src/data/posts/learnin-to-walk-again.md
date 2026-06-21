---
title: Learnin' to walk again
pubDate: 2026-06-21
description: Why rebuilding sucks. But it's important.
featured: true
draft: false
tags: []
image: https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdkenNxMG5ibTdseHBtNTUxMG9maWV2Y2tvcGY4Z2k1YnFsMnFtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mE0M2TVys8k6Y/giphy.gif
---
As I've learned more about Terraform, Ansible and Kubernetes and have begun to use them and really understand how they work, I realize that I am organizing things at the wrong grain, which makes management of them difficult.

What I need to do is take everything regarding FreeIPA in Ansible and Terraform for example, and pull into its own project. It's unlikely that there will be cross-pollination. Then, for stuff like Teleport, create its own project containing Terraform/Ansible items.

I danced around organizing things like this by an over commitment to DRY (don't repeat yourself). My goal was to NEVER repeat myself. I do not regret this commitment however, because forcing myself to stick to it even when it didn't make sense really taught me where it shines and where it does not in a way I otherwise would not have seen.

I tend to over-worry about the "correct" way to do things. This is probably from having done things incorrectly or seeing them done incorrectly, and the consequences thereof. This obsession would slow me down significantly as I would spend more time re-designing and never any time moving forward.

Between my home projects and work, I began to notice how I had completed much less than I usually do. I try not to look at it that way though, as each redesign was in itself was me learning something new, and each of those instances were valuable in some new way and I think have overall made me a much better programmer/engineer than I was prior.

---

I've also come to value books so much more. There were concepts I'd spend a week bouncing around online posts and articles (that were in some part likely AI generated) that were put together so elegantly in a book about the topic. My issue was always thinking "Oh, I know this part. I'll skip to the next part." And then in each of those parts, just doing a skim. Recently, I've seen committing to re-reading concepts I "already knew" has revealed I was familiar with them but did not understand.

Humans have put together books like this with so much more intent than either AI or someone trying to make a quick buck off Medium. I'm resolving that if I get stuck, I'll take a break from the project to actually read. It just always felt anti-antithetical to progress.

Gotta go slow to go fast.


<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdkenNxMG5ibTdseHBtNTUxMG9maWV2Y2tvcGY4Z2k1YnFsMnFtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mE0M2TVys8k6Y/giphy.gif" alt="drawing" style="width:200px;"/>

Does this mean I'll step back once more into my "bad habit" of doing another rebuild of everything? Kinda yes. Including these sites. Really, it'll just be a re-organization. Necessary to implement what I've learned and how I will proceed moving forward. And there may be future rebuilds, but not because I was worried all along about whether I built it wrong from the get-go. Instead, based on learning a truly important new philosophy and fully understanding it.