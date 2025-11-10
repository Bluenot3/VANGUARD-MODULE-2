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
