# Changelog

All notable changes to ZeroToML are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.2.0] — 2026-05-26

### Added

- `cheatsheet.html`: Syntax reference for nine ML libraries — NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, XGBoost, LightGBM, PyTorch, TensorFlow/Keras. Each section includes a function reference table, worked code examples, and copy-paste code blocks. Sticky grid nav matches `pratical.html` style.
- `mlops.html`: MLOps and deployment reference across eleven categories — cloud providers, Docker/K8s, data pipelines, version control, experiment tracking, CI/CD, model serving, monitoring, LLMOps, hardware acceleration, and a full deployment guide with working Django, Flask, and FastAPI examples plus Kubernetes manifests.

### Changed

- `layout.js`: Renamed "Practical" nav item to "ML Lifecycle". Added "Cheat Sheet" and "MLOps" to desktop nav, mobile menu, and active link detection. Expanded footer from 4 to 5 columns — added "References" column linking all three reference guides. Updated footer grid to `sm:grid-cols-3 lg:grid-cols-5`. Updated stat strip.
- `index.html`: Replaced single ML Lifecycle card with a three-card "Reference Guides" section — one card per reference page with distinct accent colours (terra, sky, sage).
- `about.html`: Added `#cheatsheet` and `#mlops-guide` subsections under Companion Tools. Updated stat pill to "3 Reference Guides".
- `README.md`: Expanded `## Reference Guides` section to cover all three pages with badges and descriptions. Updated the Learning Loop diagram.

## [1.1.0] — 2026-05-22

### Added — Professional ML Lifecycle & Architectures

- `pratical.html`: New standalone guide covering real-world ML project architectures across 10 domains — Computer Vision, NLP/LLMs, Tabular ML, Generative AI, Time Series, Recommendation Systems, Graph Neural Networks, Audio ML, Anomaly Detection, and Multi-modal AI
- Each domain includes an end-to-end pipeline diagram, recommended folder structure, artifact checkpoints, and production-grade expert tips
- Pipeline diagrams are fully responsive with horizontal scroll on mobile

### Changed — Site Integration

- `index.html`: Added "Practical Resources" section between the Features Strip and Tools Section — features a two-column card with domain previews and a direct link to the ML Lifecycle page
- `index.html`: Updated footer stat strip to reflect the new lifecycle guide
- `about.html`: Added `#ml-lifecycle` subsection under Companion Tools describing the page and how it bridges curriculum learning to production system design
- `about.html`: Updated stat pill from "3 Companion Tools" to "4 Practical Resources"
- `README.md`: Added `Practical Resources` section with a full domain table and updated the Complete Learning Loop to include the ML Lifecycle step

---

## [1.0.0] — 2025-04-18

### Added — All 9 Modules Complete 🎉

**Module 01 — Environment & Data Foundations**
- 1.1 The ML Ecosystem: Python, Conda, JupyterLab, project structure
- 1.2 NumPy Mastery: N-dimensional arrays, broadcasting, vectorisation
- 1.3 Pandas for Data Science: DataFrames, GroupBy, pivot tables, I/O
- 1.4 Exploratory Data Analysis: Matplotlib/Seaborn, outlier detection, correlation heatmaps

**Module 02 — Mathematical Pillars**
- 2.1 Linear Algebra: matrix multiplication, inverse, norms, eigenvalues
- 2.2 Calculus & Gradient Descent: partial derivatives, chain rule, SGD, Adam
- 2.3 Probability & Statistics: Bayes' theorem, distributions, hypothesis testing

**Module 03 — Feature Engineering**
- 3.1 Data Cleaning: MCAR/MAR/MNAR, KNN imputation, type fixes, outliers
- 3.2 Preprocessing & Scaling: StandardScaler, MinMax, Robust, Pipelines
- 3.3 Categorical Encoding: one-hot, ordinal, target encoding with K-fold
- 3.4 Feature Selection & PCA: filter/wrapper/embedded methods, scree plot

**Module 04 — Supervised Learning**
- 4.1 Regression: simple, multiple, polynomial, Ridge, Lasso, residual analysis
- 4.2 Classification: logistic regression, KNN, decision boundary visualisation
- 4.3 Support Vector Machines: hard/soft margin, kernel trick (RBF, polynomial)
- 4.4 Tree-based Models: Gini, entropy, CART algorithm, pruning, importances
- 4.5 Ensemble Methods: Random Forest, XGBoost, LightGBM, CatBoost, early stopping

**Module 05 — Unsupervised Learning**
- 5.1 Clustering: K-Means (elbow + silhouette), hierarchical, DBSCAN
- 5.2 Dimensionality Reduction: PCA, t-SNE, LDA with side-by-side comparison
- 5.3 Association Rule Learning: Apriori, ECLAT, support/confidence/lift

**Module 06 — Model Evaluation & Optimization**
- 6.1 Bias vs. Variance: learning curves, validation curves, K-fold CV
- 6.2 Classification Metrics: confusion matrix, precision/recall/F1, ROC-AUC, PR-AUC
- 6.3 Regression Metrics: MAE, MSE, RMSE, R², MAPE, residual plots
- 6.4 Hyperparameter Tuning: GridSearchCV, RandomizedSearchCV, Bayesian (Optuna)

**Module 07 — Deep Learning**
- 7.1 Perceptron Foundations: perceptron from scratch, all activation functions with derivatives
- 7.2 Network Architecture: MLP with Keras, BatchNorm, Dropout, EarlyStopping
- 7.3 Backprop & Optimization: manual backprop, 5 optimisers benchmarked, LR scheduling
- 7.4 Advanced DL: CNNs on MNIST, LSTMs/GRUs for time-series, transfer learning

**Module 08 — Reinforcement Learning**
- 8.1 The RL Framework: agent/env/state/action/reward, Bellman equation, ε-greedy
- 8.2 Q-Learning & DQN: tabular Q-Learning on FrozenLake, full DQN from scratch on CartPole

**Module 09 — MLOps & Deployment**
- 9.1 Model Persistence: Pickle, Joblib, Keras SavedModel, versioning with metadata
- 9.2 Building REST APIs: FastAPI + Pydantic, batch endpoints, health check, Pytest
- 9.3 Containerization: Dockerfile best practices, Docker Compose, pushing to ECR
- 9.4 Cloud Deployment: Streamlit Community Cloud, Render, AWS (EC2/ECS/Lambda), GitHub Actions CI/CD

### Added — Companion Tools
- PyOrbit IDE: serverless Python data science IDE (Pyodide + Monaco Editor)
- Hyperplane Hero: interactive SVM learning game (5 levels, 3 kernels)
- Rich Text → Markdown Converter: privacy-first browser-native conversion

### Added — Site Infrastructure
- `about.html`: comprehensive about page with full curriculum overview, tool descriptions, tech stack, and contribution guide
- Updated `index.html`: 9-module curriculum grid, tools section, learning loop, expanded footer
- `CONTRIBUTING.md`: full contributor guide with HTML component reference
- `CODE_OF_CONDUCT.md`: community standards
- `CHANGELOG.md`: this file
- `.github/ISSUE_TEMPLATE/`: bug report and content improvement templates
- `.github/PULL_REQUEST_TEMPLATE.md`: structured PR template

### Changed
- Theme: removed dark/light toggle entirely — permanent "Earthy Sky Coder" theme
- Sidebar: removed "soon" labels and opacity dimming — all lessons render uniformly
- Logo: updated from Σ to ML monogram
- Navbar: added About and Tools links
 