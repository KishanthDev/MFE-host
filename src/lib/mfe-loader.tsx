import React, { Component, Suspense, type ReactNode } from "react";
import { AlertCircle, RefreshCw, Loader2 } from "lucide-react";

// --- 1. The Error Boundary ---
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class MfeErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 m-4 border border-red-200 bg-red-50 rounded-2xl">
          <AlertCircle className="w-10 h-10 text-red-500 mb-3" />
          <h3 className="text-lg font-bold text-red-900">Module Failed to Load</h3>
          <p className="text-sm text-red-700 mt-1 mb-4 text-center max-w-md">
            We couldn't reach this part of the application. The service might be updating or temporarily offline.
          </p>
          <button
            onClick={this.resetError}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 border border-red-200 font-semibold rounded-lg shadow-sm hover:bg-red-50 transition-colors"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- 2. The Loader Component ---
interface MfeLoaderProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  fallback?: ReactNode;
}

export function MfeLoader({ component: LazyComponent, fallback }: MfeLoaderProps) {
  return (
    <MfeErrorBoundary>
      <Suspense
        fallback={
          fallback || (
            <div className="flex flex-col items-center justify-center p-12 w-full h-full text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-4" />
              <p className="text-sm font-medium animate-pulse">Connecting to remote module...</p>
            </div>
          )
        }
      >
        <LazyComponent />
      </Suspense>
    </MfeErrorBoundary>
  );
}