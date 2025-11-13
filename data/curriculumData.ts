import type { Curriculum } from '../types';

export const curriculumData: Curriculum = {
  title: 'Module 2: Agents & Automation Frameworks',
  summaryForAI:
    'Module 2 of ZEN AI VANGUARD focuses on transforming creators into AI systems architects. It covers designing, deploying, and governing intelligent, autonomous agents. The curriculum is split into two parts: "Agentic Foundations & Reasoning Systems" and "Advanced Automation & Governance Frameworks". It includes hands-on labs and simulations for concepts like multi-step reasoning, memory architectures, tool usage, collaborative agents, security, workflow orchestration, RAG, multi-modal agents, and governance.',
  sections: [
    {
      id: 'overview',
      title: 'Module Overview',
      content: [
        {
          type: 'paragraph',
          content:
            'Module 2 transforms you from an AI literate creator into an AI systems architect—someone who designs, deploys, and governs intelligent agents that act autonomously, collaborate, and learn.',
        },
        {
          type: 'quote',
          content: 'Everything here is self-paced, immersive, and tile-based: each section and lab appears as its own tile inside the AI.dev dashboard.'
        }
      ],
    },
    {
      id: 'part-1',
      title: 'PART 1: Agentic Foundations & Reasoning Systems',
      content: [
        {
          type: 'paragraph',
          content: 'This first part lays the groundwork for understanding what an intelligent agent is, how it thinks, remembers, and acts in the world. We will explore the core components that enable autonomy and sophisticated reasoning.'
        }
      ],
      subSections: [
        {
          id: '1-1',
          title: '1.1 What Is an Agent?',
          content: [
            { type: 'paragraph', content: 'Agents = LLM + Memory + Tools + Goals.' },
            { type: 'paragraph', content: 'Gemini 2.5 Pro narrates how reasoning loops form plans, call APIs, evaluate results, and adapt.' },
            { type: 'heading', content: 'App: Agent Anatomy Visualizer (Nano-Banana)' },
            { type: 'paragraph', content: 'Dissects a running agent into its reasoning, memory, and action subsystems.'},
            { type: 'interactive', content: '', component: 'AgentSystemDesigner', interactiveId: 'agent-anatomy-1' },
          ],
        },
        {
          id: '1-2',
          title: '1.2 Planning and Chain of Thought',
          content: [
            { type: 'paragraph', content: 'Demonstrate multi-step reasoning with Plan-Graph Simulator—Gemini renders reasoning nodes as glowing orbs; drag to rearrange logic order and see outcome differences.' },
            { type: 'heading', content: 'Mini App: Plan-Graph Simulator' },
            { type: 'interactive', content: '', component: 'LangGraphVisualizer', interactiveId: 'plan-graph-1' },
          ],
        },
        {
          id: '1-3',
          title: '1.3 Memory Architectures',
          content: [
            { type: 'paragraph', content: 'Short-term vs long-term vs episodic memory.' },
            { type: 'heading', content: 'Lab: Memory Vault XR' },
            { type: 'paragraph', content: 'Type facts; Gemini stores and retrieves them while Nano-Banana visualizes embeddings clustering.' },
            { type: 'interactive', content: '', component: 'MemoryDecayLab', interactiveId: 'memory-vault-1' },
          ],
        },
        {
          id: '1-4',
          title: '1.4 Tool Usage & API Control',
          content: [
            { type: 'paragraph', content: 'Agents call external tools to act.' },
            { type: 'heading', content: 'Interactive Console' },
            { type: 'paragraph', content: 'Test calculators, search APIs, and IoT devices.' },
            { type: 'interactive', content: '', component: 'SmartContractEventListener', interactiveId: 'tool-call-dashboard-1' },
          ],
        },
        {
          id: '1-5',
          title: '1.5 Autonomy & Goal Setting',
          content: [
            { type: 'paragraph', content: 'Gemini teaches prompt-to-plan conversion.' },
            { type: 'heading', content: 'Experience: Goal Forge Workbench' },
            { type: 'paragraph', content: 'Set goal → observe self-tasking.' },
            { type: 'interactive', content: '', component: 'SchedulePlanner', interactiveId: 'goal-forge-1' },
          ],
        },
        {
          id: '1-6',
          title: '1.6 Collaborative Agents',
          content: [
            { type: 'paragraph', content: 'Multi-agent networks mirror human teams.' },
            { type: 'heading', content: 'Simulation: Team Matrix' },
            { type: 'paragraph', content: 'Agents coordinate to write, fact-check, and illustrate an article.' },
            { type: 'interactive', content: '', component: 'MultiAgentChatSandbox', interactiveId: 'team-matrix-1' },
          ],
        },
        {
          id: '1-7',
          title: '1.7 Evaluation & Feedback Loops',
          content: [
            { type: 'paragraph', content: 'Learn RLHF (Reward Learning from Human Feedback).' },
            { type: 'heading', content: 'Game: Rate outputs → Nano-Banana plots reward curves.' },
            { type: 'interactive', content: '', component: 'RlhfTrainerGame', interactiveId: 'feedback-trainer-1' },
          ],
        },
        {
          id: '1-8',
          title: '1.8 Security & Containment',
          content: [
            { type: 'paragraph', content: 'Sandboxing autonomous systems.' },
            { type: 'heading', content: 'Scenario Sim' },
            { type: 'paragraph', content: 'Run malicious-prompt test; watch firewall block.' },
            { type: 'interactive', content: '', component: 'AdversarialAttackSimulator', interactiveId: 'red-team-lab-1' },
          ],
        },
        {
          id: '1-9',
          title: '1.9 Deployment Pipelines',
          content: [
            { type: 'paragraph', content: 'How to push agents to production. Flow: Dev → Test → Govern → Deploy.' },
            { type: 'heading', content: 'App: Agent CI/CD Pipeline' },
            { type: 'interactive', content: '', component: 'DockerCommandQuiz', interactiveId: 'ci-cd-pipeline-1' },
          ],
        },
        {
          id: '1-10',
          title: '1.10 Capstone 1 — Build a Single Purpose Agent',
          content: [
            { type: 'paragraph', content: 'Create a focused automation (e.g., daily brief summarizer). Include: plan, memory, API, ethical guardrails. Gemini guides step-by-step; Nano-Banana records timeline animation.' },
            { type: 'interactive', content: '', component: 'MeetingSummarizer', interactiveId: 'capstone-1-agent' },
          ],
        },
        {
          id: '1-11',
          title: '1.11 Capstone Bonus: ZEN Promptboard Pro',
          content: [
            {
              type: 'paragraph',
              content:
                "This bonus capstone provides the complete source code for a professional AI Promptboard application built with Gradio and OpenAI's API. You can deploy this directly to services like Hugging Face Spaces.",
            },
            { type: 'heading', content: 'app.py' },
            {
              type: 'code',
              language: 'python',
              content: `import os
import gradio as gr
import openai

# --------------- PRESETS & FORMATS ---------------

PRESETS = {
    "Executive Summary": {
        "system_role": (
            "You are an executive briefing assistant for senior leaders. "
            "You distill complex material into clear, non-fluffy summaries that support decisions."
        ),
        "user_hint": "Paste a long report, transcript, or document here and I'll summarize it.",
    },
    "Polished Email Reply": {
        "system_role": (
            "You are a professional communications assistant. "
            "You write clear, concise, and respectful business emails suitable for executives."
        ),
        "user_hint": "Paste the email you received and notes on how you want to respond.",
    },
    "Meeting Notes → Action Plan": {
        "system_role": (
            "You transform messy meeting notes into a crisp, action-oriented summary."
        ),
        "user_hint": "Paste rough notes or bullet points from a meeting, even if they are messy.",
    },
    "Idea Generator / Brainstorm": {
        "system_role": (
            "You are a creative strategist. You generate structured ideas with next steps."
        ),
        "user_hint": "Describe what you want to build, improve, or launch. I'll propose ideas.",
    },
}

# How each preset should format its output in Markdown
PRESET_FORMAT_SPECS = {
    "Executive Summary": """
Output format spec (use GitHub-flavored Markdown):

- Start with: \`## Executive Summary\`
- Then add \`### Context\` with 2–4 sentences.
- Add \`### Key Points\` as a bullet list (•) with the most important insights.
- Add \`### Recommendations\` as a numbered list (1., 2., 3.) with concrete actions.
- Use **bold** for critical terms and *italics* for nuance where helpful.
""",
    "Polished Email Reply": """
Output format spec (use GitHub-flavored Markdown):

- Start with: \`## Email Draft\`
- Then include:
  - \`**Subject:** ...\`
  - A realistic greeting line (e.g., \`Hi Alex,\`)
  - Body in short paragraphs (2–4 sentences each).
  - Optional bullet points if listing items.
  - A professional closing (e.g., \`Best,\` or \`Kind regards,\`) and a placeholder name.
- Do NOT include meta-comments about the email. Only output the email content.
""",
    "Meeting Notes → Action Plan": """
Output format spec (use GitHub-flavored Markdown):

- Start with: \`## Meeting Summary\`
- Then sections:
  - \`### Context\` – 2–3 sentences on what the meeting was about.
  - \`### Key Decisions\` – bullet list.
  - \`### Action Items\` – numbered list, each item formatted like:
    \`1. **Owner:** Name (or Generic Owner) — *Due:* date or timeframe — Task description\`
  - \`### Risks & Open Questions\` – bullets with risks, blockers, or unknowns.
""",
    "Idea Generator / Brainstorm": """
Output format spec (use GitHub-flavored Markdown):

- Start with: \`## Idea Set\`
- For each idea:
  - \`### Idea N — Short Title\`
  - Bullet list:
    - \`**Overview:** ...\`
    - \`**Why it matters:** ...\`
    - \`**Next steps (1–3):** ...\`
- Aim for 3–5 strong ideas rather than many weak ones.
""",
}

BASE_SYSTEM = """
You are the ZEN Promptboard Pro assistant.

Rules:
- Always respond in GitHub-flavored Markdown.
- Follow any provided "Output format spec" exactly, especially headings and bullet structure.
- Make the output immediately usable and ready to send or paste into a document.
- Never explain what you are doing; do NOT include meta-instructions in the final output.
"""


# --------------- CORE CHAT LOGIC ---------------

def run_completion(api_key, model, preset_name, system_prompt, user_prompt, history):
    """
    Core call to the OpenAI Chat Completions API.

    - Does NOT throw on missing API key; returns a friendly message instead.
    - Uses model-agnostic parameters (no temperature / max_tokens) to avoid 400s.
    - Injects preset-specific formatting rules so output is richly structured.
    """

    history = history or []

    if not api_key:
        msg = "❌ No API key found. Paste your key and click **Save Key** first."
        history.append(("System", msg))
        return history, msg

    if not user_prompt.strip():
        msg = "⚠️ Please enter a prompt or paste some content before running."
        history.append(("System", msg))
        return history, msg

    openai.api_key = api_key.strip()

    # Build system message combining base, preset role, and preset formatting
    system_parts = [BASE_SYSTEM]

    if preset_name in PRESETS:
        system_parts.append(f"Preset role description:\\n{PRESETS[preset_name]['system_role']}")
        fmt = PRESET_FORMAT_SPECS.get(preset_name, "")
        if fmt:
            system_parts.append(fmt)

    if system_prompt.strip():
        system_parts.append(
            "Additional system instructions from the user (apply after all above rules):\\n"
            + system_prompt.strip()
        )

    final_system = "\\n\\n".join(system_parts)

    messages = [
        {"role": "system", "content": final_system},
        {"role": "user", "content": user_prompt.strip()},
    ]

    try:
        # Minimal API call: no temperature / max_* params to avoid model quirks
        response = openai.chat.completions.create(
            model=model.strip(),
            messages=messages,
        )
        answer = (response.choices[0].message.content or "").strip()
        if not answer:
            answer = "⚠️ The model returned an empty response. Try again with more context."
    except Exception as e:
        answer = f"❌ Error while calling the model:\\n\\n\\\`{e}\\\`"

    history.append(("You", user_prompt))
    history.append(("Assistant", answer))

    return history, answer


# --------------- HELPERS ---------------

def save_api_key(raw_key: str):
    cleaned = (raw_key or "").strip()
    if not cleaned:
        raise gr.Error("🔐 Please paste a valid API key before saving.")

    if not cleaned.startswith("sk-"):
        gr.Info("Key saved, but it doesn’t start with 'sk-'. Double-check your provider format.")

    return cleaned, gr.update(value="", placeholder="API key saved ✔")


def load_preset(preset_name: str):
    if not preset_name or preset_name not in PRESETS:
        return gr.update(), gr.update()
    preset = PRESETS[preset_name]
    return preset["system_role"], preset["user_hint"]


# --------------- UI ---------------

CUSTOM_CSS = """
#zen-root {
    background: radial-gradient(circle at top left, #020617 0, #020617 40%, #000000 100%);
    color: #f9fafb;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    padding-bottom: 2rem;
}
.zen-card {
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.7));
    border: 1px solid rgba(148,163,184,0.45);
    backdrop-filter: blur(22px);
    box-shadow:
      0 24px 60px rgba(15,23,42,0.95),
      0 0 0 1px rgba(15,23,42,0.85);
}
.zen-header {
    padding: 1.8rem 2rem;
    margin-bottom: 1.5rem;
}
.zen-pill {
    border-radius: 9999px;
    padding: 0.25rem 0.9rem;
    border: 1px solid rgba(129,140,248,0.7);
    color: #a5b4fc;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
}
.zen-title {
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: -0.03em;
}
.zen-subtitle {
    font-size: 0.9rem;
    color: #9ca3af;
}
#zen-output-card {
    padding: 1.3rem 1.6rem;
}
#zen-output-card .markdown-body h2 {
    margin-top: 0.2rem;
}
#zen-output-card .markdown-body h3 {
    margin-top: 0.9rem;
}
#zen-meta-card {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    color: #e5e7eb;
    border-bottom: 1px solid rgba(148,163,184,0.35);
}
"""


with gr.Blocks(
    css=CUSTOM_CSS,
    elem_id="zen-root",
    fill_height=True,
    title="ZEN Promptboard Pro — GPT-5",
) as demo:
    # Header
    gr.Markdown(
        """
<div class="zen-card zen-header">
  <div class="zen-pill">ZEN VANGUARD • GPT-5 WORKSTATION</div>
  <div class="zen-title" style="margin-top: 0.8rem;">Professional AI Promptboard</div>
  <div class="zen-subtitle" style="margin-top: 0.5rem;">
    Transform unstructured content into structured, ready-to-use executive artifacts —
    summaries, action plans, emails, and idea sets.
  </div>
</div>
        """,
    )

    api_key_state = gr.State("")

    with gr.Row(equal_height=True):
        # LEFT: Controls
        with gr.Column(scale=1):
            with gr.Group(elem_classes=["zen-card"], elem_id="zen-left-card"):
                gr.Markdown("#### 1. Connect to your model")

                api_key_input = gr.Textbox(
                    label="API Key",
                    placeholder="Paste your GPT-style key here (not stored on server)",
                    type="password",
                )

                with gr.Row():
                    save_btn = gr.Button("Save Key", variant="primary", scale=1)
                    key_status = gr.Markdown("Key not saved yet.")

                model_name = gr.Textbox(
                    label="Model ID",
                    value="gpt-5",
                    info="Default: gpt-5. You can switch to gpt-4o, gpt-4.1-mini, etc.",
                )

                gr.Markdown("---")
                gr.Markdown("#### 2. Choose a workflow")

                preset_radio = gr.Radio(
                    label="Quick presets",
                    choices=list(PRESETS.keys()),
                    interactive=True,
                )

            with gr.Group(elem_classes=["zen-card"]):
                gr.Markdown("#### 3. System behavior (optional)")
                system_box = gr.Textbox(
                    label="Additional system / role instructions",
                    placeholder="Optional: refine how the AI behaves (e.g., 'Write at director level, avoid buzzwords.')",
                    lines=4,
                )

        # RIGHT: Workspace
        with gr.Column(scale=2):
            with gr.Group(elem_classes=["zen-card"]):
                gr.Markdown("#### 4. Your content")

                user_box = gr.Textbox(
                    label="Prompt / Notes / Source Content",
                    placeholder="Paste meeting notes, drafts, transcripts, or describe what you want.",
                    lines=9,
                )

                run_btn = gr.Button("Run Prompt", variant="primary")

            with gr.Group(elem_classes=["zen-card"], elem_id="zen-output-wrapper"):
                meta_md = gr.Markdown(
                    "Ready. Choose a preset and run your first prompt.",
                    elem_id="zen-meta-card",
                )
                with gr.Tab("Formatted Output"):
                    output_md = gr.Markdown(
                        "Output will appear here.",
                        elem_id="zen-output-card",
                    )
                with gr.Tab("History"):
                    history_chat = gr.Chatbot(
                        label="Conversation History",
                        height=320,
                        type="tuples",  # explicit, no deprecation warning
                        show_copy_button=True,
                    )

    # --------------- WIRES / EVENTS ---------------

    def _save_and_ack(key: str):
        stored_key, placeholder_update = save_api_key(key)
        status_msg = "✅ API key stored for this session."
        return stored_key, status_msg, placeholder_update

    save_btn.click(
        _save_and_ack,
        inputs=[api_key_input],
        outputs=[api_key_state, key_status, api_key_input],
    )

    preset_radio.change(
        fn=load_preset,
        inputs=[preset_radio],
        outputs=[system_box, user_box],
    )

    def _run(api_state, model, preset_name, system, user, history):
        history, answer = run_completion(
            api_key=api_state,
            model=model,
            preset_name=preset_name,
            system_prompt=system,
            user_prompt=user,
            history=history,
        )
        # Meta card text: which preset + which model
        preset_label = preset_name or "Custom"
        meta_text = f"**Preset:** {preset_label} &nbsp;·&nbsp; **Model:** \\\`{model.strip() or 'gpt-5'}\\\`"
        return meta_text, history, answer

    run_btn.click(
        _run,
        inputs=[api_key_state, model_name, preset_radio, system_box, user_box, history_chat],
        outputs=[meta_md, history_chat, output_md],
    )

if __name__ == "__main__":
    demo.launch()
`,
            },
            { type: 'heading', content: 'requirements.txt' },
            {
              type: 'code',
              language: 'bash',
              content: `gradio==5.49.1
openai>=1.40.0`,
            },
            { type: 'heading', content: 'README.md' },
            {
              type: 'code',
              language: 'javascript', // Represents markdown
              content: `---
title: ZEN Promptboard Pro (GPT-5)
emoji: 🧠
colorFrom: blue
colorTo: indigo
sdk: gradio
sdk_version: 5.49.1
app_file: app.py
pinned: false
short_description: GPT-5 prompt console with reusable presets
---

# ZEN Promptboard Pro — GPT-5

A professional **AI Promptboard** built for the ZEN Vanguard Program.

### 🧩 Key Features
- Uses **GPT-5** by default (works with GPT-4+ too)  
- Secure **“Save API Key”** session memory  
- Built-in **presets** for instant use:
  - Executive Summary  
  - Polished Email Reply  
  - Meeting Notes → Action Plan  
  - Idea Generator  
- Clean, glass-style UI designed for professionals  

### 🚀 How to Use
1. Paste your API key and click **Save Key**  
2. Select or edit your **model name** (\\\`gpt-5\\\` by default)  
3. Choose a preset and paste your content  
4. Click **Run Prompt**  
5. Copy or reuse results directly  

This app demonstrates real professional AI workflow design — helping Vanguard learners
move from prompt engineers to **AI operators**.`,
            },
          ],
        },
      ]
    },
    {
      id: 'part-2',
      title: 'PART 2: Advanced Automation & Governance Frameworks',
      content: [
        {
          type: 'paragraph',
          content: 'Building on agentic foundations, this module explores how to orchestrate large-scale systems, manage complex knowledge bases, and implement robust governance frameworks for responsible automation.'
        }
      ],
      subSections: [
        {
          id: '2-1',
          title: '2.1 Workflow Orchestration',
          content: [
            { type: 'paragraph', content: 'Link multiple agents into a pipeline.' },
            { type: 'heading', content: 'App Suite: Orchestration Canvas' },
            { type: 'interactive', content: '', component: 'DataDecisionFlowchartBuilder', interactiveId: 'orchestration-canvas-1' },
          ],
        },
        {
          id: '2-2',
          title: '2.2 Knowledge Retrieval & RAG',
          content: [
            { type: 'paragraph', content: 'Connect private data → agents.' },
            { type: 'heading', content: 'App: RAG Builder Pro' },
            { type: 'interactive', content: '', component: 'RagBuilder', interactiveId: 'rag-builder-pro-1' },
          ],
        },
        {
          id: '2-3',
          title: '2.3 Multi-Modal Agents',
          content: [
            { type: 'paragraph', content: 'Fuse text + image + audio inputs.' },
            { type: 'heading', content: 'Nano-Banana Simulation' },
            { type: 'paragraph', content: 'Agent perceives photo, narrates it, answers verbally.' },
            { type: 'interactive', content: '', component: 'AudioVisualSyncLab', interactiveId: 'vision-language-bridge-1' },
          ],
        },
        {
          id: '2-4',
          title: '2.4 Decision Making Under Uncertainty',
          content: [
            { type: 'paragraph', content: 'Probabilistic planning and Monte Carlo simulations.' },
            { type: 'heading', content: 'App: Bayesian Flowchart' },
            { type: 'interactive', content: '', component: 'SimplePredictiveModel', interactiveId: 'bayesian-flowchart-1' },
          ],
        },
        {
          id: '2-5',
          title: '2.5 Human-in-the-Loop Automation',
          content: [
            { type: 'paragraph', content: 'Blend AI speed + human judgment.' },
            { type: 'heading', content: 'App: Approval Queue Manager' },
            { type: 'interactive', content: '', component: 'UiFeedback', interactiveId: 'approval-queue-1' },
          ],
        },
        {
          id: '2-6',
          title: '2.6 Governance & Transparency',
          content: [
            { type: 'paragraph', content: 'Create auditable systems.' },
            { type: 'heading', content: 'App: Governance Dashboard Pro' },
            { type: 'interactive', content: '', component: 'PrivacyLensDashboard', interactiveId: 'governance-dashboard-1' },
          ],
        },
        {
          id: '2-7',
          title: '2.7 AI Economy & Resource Optimization',
          content: [
            { type: 'paragraph', content: 'Measure cost vs output.' },
            { type: 'heading', content: 'App: Token Economy Simulator 2.0' },
            { type: 'interactive', content: '', component: 'TokenEconomySimulator', interactiveId: 'token-economy-2' },
          ],
        },
        {
          id: '2-8',
          title: '2.8 Global Coordination & Policy Integration',
          content: [
            { type: 'paragraph', content: 'Understand how agents fit within regulation and society.' },
            { type: 'heading', content: 'App: Policy Graph Explorer' },
            { type: 'interactive', content: '', component: 'LivePatentRadar', interactiveId: 'policy-graph-1' },
          ],
        },
        {
          id: '2-9',
          title: '2.9 Future Frontiers — Neuro-Symbolic & Quantum Agents',
          content: [
            { type: 'paragraph', content: 'Explore hybrid reasoning and quantum-accelerated planning.' },
            { type: 'heading', content: 'App: Neuro-Symbolic Lab' },
            { type: 'interactive', content: '', component: 'AlgorithmVisualizer', interactiveId: 'neuro-symbolic-lab-1' },
          ],
        },
        {
          id: '2-10',
          title: '2.10 Capstone 2 — Design an Autonomous Organization',
          content: [
            { type: 'paragraph', content: 'Team of agents sharing memory + goals.' },
            { type: 'list', content: [
                'Use Orchestration Canvas to map roles.',
                'Add Governance Dashboard + Ethics Checker.',
                'Deploy on AI.dev Sandbox.',
                'Record Nano-Banana journey video for Digital Diary.',
                'Gemini auto-grades on efficiency, transparency, and safety.',
            ]},
            { type: 'interactive', content: '', component: 'AgentSystemDesigner', interactiveId: 'capstone-2-org' },
          ],
        },
      ]
    },
    {
      id: 'deliverables',
      title: 'Learner Deliverables',
      content: [
        { type: 'list', content: [
            'Agent Blueprints (JSON configs + documentation)',
            'Governance Policy Report',
            'Energy and Token Usage Dashboard',
            'Autonomous Organization Demo Video',
            'Reflection Essay: “The Human in the Loop”'
        ]}
      ]
    },
    {
        id: 'outcome',
        title: 'Outcome',
        content: [
            { type: 'heading', content: 'By the end of Module 2 you will:' },
            { type: 'list', content: [
                'Build and deploy autonomous multi-agent systems.',
                'Govern them with transparency and ethics.',
                'Optimize performance, cost, and sustainability.',
                'Present a functioning AI Organization as your first professional ZEN VANGUARD credential.'
            ]}
        ]
    }
  ],
};